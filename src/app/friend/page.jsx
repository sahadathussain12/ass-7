import Image from "next/image";
import Link from "next/link";





const FriendPage = async () => {
  const res = await fetch(`${process.env.PUBLIC_URL}/data.json`,{
    cache:"no-store"
  });
  const friends = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link
           key={friend.id} href={`/friend/${friend.id}`}>
          <div
            
            className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl transition"
          >
            {/* Profile Image */}
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-3 text-lg font-semibold">
              {friend.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              62 days ago
            </p>
            <p className="text-sm text-gray-500">
              {friend.time}
            </p>

            <div className="mt-3">
              <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                WORK
              </span>
            </div>

            {/* Status */}
           {/* Status */}
  <div className="mt-3">
  <span
    className={`px-3 py-1 text-xs font-medium rounded-full ${
      friend.status?.toLowerCase() === "almost due"
        ? "bg-amber-300 text-amber-700"
        : friend.status?.toLowerCase() === "overdue"
        ? "bg-red-300 text-red-600"
        : friend.status?.toLowerCase() === "on track" || friend.status?.toLowerCase() === "on-track"
        ? "bg-green-300 text-green-600"
        : "bg-gray-100 text-gray-600" 
    }`}
  >
    {friend.status}
  </span>
</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendPage;

// import Image from "next/image";
// import Link from "next/link";
// import data from "@/public/data.json";

// const FriendPage = () => {
//   const friends = data;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Your Friends</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {friends.map((friend) => (
//           <Link key={friend.id} href={`/friend/${friend.id}`}>
//             <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl transition">
              
//               {/* Profile Image */}
//               <Image
//                 src={friend.picture}
//                 alt={friend.name}
//                 width={80}
//                 height={80}
//                 className="rounded-full mx-auto"
//               />

//               {/* Name */}
//               <h2 className="mt-3 text-lg font-semibold">
//                 {friend.name}
//               </h2>

//               {/* Last Contact */}
//               <p className="text-sm text-gray-500 mt-1">
//                 62 days ago
//               </p>

//               {/* Time */}
//               <p className="text-sm text-gray-500">
//                 {friend.time}
//               </p>

//               {/* Tag */}
//               <div className="mt-3">
//                 <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
//                   WORK
//                 </span>
//               </div>

//               {/* Status */}
//               <div className="mt-3">
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     friend.status?.toLowerCase() === "almost due"
//                       ? "bg-amber-300 text-amber-700"
//                       : friend.status?.toLowerCase() === "overdue"
//                       ? "bg-red-300 text-red-600"
//                       : friend.status?.toLowerCase() === "on track" ||
//                         friend.status?.toLowerCase() === "on-track"
//                       ? "bg-green-300 text-green-600"
//                       : "bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   {friend.status}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FriendPage;