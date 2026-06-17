'use client'
import { FriendsContext } from '@/contex/ContexProvider';
import React, { useContext, useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { FiVideo } from 'react-icons/fi';
import { IoMdVideocam } from 'react-icons/io';
import { MdCall } from 'react-icons/md';



const TimeLinePage = () => {
     const { timeline, setTimeline } = useContext(FriendsContext);
   
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);
     console.log(timeline,'timeline to timeline page');
    return (
       <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mt-4 mb-5">Timeline</h1>

     <div className="dropdown dropdown-start">
  <div
    tabIndex={0}
    role="button"
    className="btn m-1 w-[400px] flex items-center justify-between"
  >
    <span className='text-gray-500'>Filter Timeline</span>
    <span>⬇️</span>
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
  >
    <li><a onClick={() => setFilter("All")}>All</a></li>
    <li><a onClick={() => setFilter("call")}>Call</a></li>
    <li><a onClick={() => setFilter("text")}>Text</a></li>
    <li><a onClick={() => setFilter("video")}>Video</a></li>
  </ul>
</div>

      <div className="space-y-3">
        {filteredTimeline.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-white rounded-lg p-4 shadow-sm"
          >
            <div>
              {item.type === "call" && <MdCall size={28} />}
              {item.type === "text" && <BsChatDots size={28} />}
              {item.type === "video" && <IoMdVideocam size={28} />}
            </div>

            <div>
              <h3 className="font-semibold">{item.text}</h3>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TimeLinePage;

