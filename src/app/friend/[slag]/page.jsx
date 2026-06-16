import TogolingBtn from "@/components/TogolingBtn";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { GoArchive } from "react-icons/go";
import { MdCall, MdNotificationsActive } from "react-icons/md";

const FriendDetelsPage = async ({ params }) => {
  const { slag } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();

  const friend = friends.find(
    (item) => item.id === Number(slag)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Card */}
        <div className="space-y-3">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />

            <h2 className="font-bold text-xl mt-3">
              {friend.name}
            </h2>

            <div className="mt-2">
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  friend.status === "overdue"
                    ? "bg-red-100 text-red-600"
                    : friend.status === "almost due"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {friend.status}
              </span>
            </div>

            <div className="mt-2">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-gray-500 mt-4">
              "{friend.bio}"
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Preferred: email
            </p>
          </div>
           <div className="space-y-2">
              <button  className="w-full bg-white border border-gray-200  rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <MdNotificationsActive className="text-lg" />
                <span>Snooze 2 Weeks</span>
              </button>
            
              <button className="w-full bg-white border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <GoArchive className="text-lg" />
                <span>Archive</span>
              </button>
            
              <button  className="w-full bg-white border border-gray-200  rounded-lg py-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition">
                <AiOutlineDelete className="text-lg" />
                <span>Delete</span>
              </button>
            </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-3xl font-bold text-green-900">
                {friend.days_since_contact}
              </h3>
              <p className="text-gray-500 text-sm">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-3xl font-bold text-green-900">
                {friend.goal}
              </h3>
              <p className="text-gray-500 text-sm">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-2xl font-bold text-green-900">
                {new Date(friend.next_due_date).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </h3>
              <p className="text-gray-500 text-sm">
                Next Due
              </p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                Relationship Goal
              </h3>

              <button className="border px-3 py-1 rounded text-sm">
                Edit
              </button>
            </div>

            <p className="mt-3 text-gray-600">
              Connect every <b>{friend.goal} days</b>
            </p>
          </div>

          {/* Quick Check In */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold mb-4">
              Quick Check-In
            </h3>

           <TogolingBtn friend={friend}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetelsPage;