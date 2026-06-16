"use client"
import { FriendsContext } from '@/contex/ContexProvider';
import { useContext } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { FiVideo } from 'react-icons/fi';
import { MdCall, MdNotificationsActive } from 'react-icons/md';
import { toast } from 'react-toastify';



const TogolingBtn = ({friend}) => {
    const { timeline, setTimeline } = useContext(FriendsContext);
    console.log(timeline,'timeline');

  const getDate = () => new Date().toLocaleDateString();
   

   

  const CallhandleClick = (type,text,friendid) => {
    const isExsit = timeline.find(text => text.type === 'call' && text.friendid === friend.id )

    if(isExsit){
          toast.error("Call already exists!");
      return
    }
    setTimeline([
      ...timeline,
      {
        friendid:friend.id,
        type: "call",
        text: friend.name,
        date: getDate(),
      },
    ]);
     toast.success("Call added successfully!");
  };

  const VedeoHandleClicked = (type,text,friendid)=>{
    const isExsit = timeline.find(text => text.type === 'video' && text.friendid === friend.id )

    if(isExsit){
          toast.error("Video already exists!");
      return
    }
      setTimeline([
      ...timeline,
      {
        friendid:friend.id,
        type: "video",
        text: friend.name,
        date: getDate(),
      },
    ]);
      toast.success("Video added successfully!");
  }

  const TextHandleClick = (type,text,friendid) => {
     const isExsit = timeline.find(text => text.type === 'text' && text.friendid === friend.id )

    if(isExsit){
          toast.error("text already exists!");
      return
    }
    setTimeline([
      ...timeline,
      {
        friendid:friend.id,
        type: "text",
        text: "Text",
        date: getDate(),
      },
    ]);
     toast.success("text added successfully!");
  };
   
  
  return (
         <div className="grid grid-cols-3 gap-3">
           <button onClick={CallhandleClick} className="border border-gray-300 shadow-lg rounded-lg py-6 flex flex-col items-center gap-1">
             <MdCall size={22} />
             Call
           </button>
         
           <button onClick={TextHandleClick} className="border border-gray-300 shadow-lg rounded-lg py-6 flex flex-col items-center gap-1">
             <BsChatDots size={22} />
             Text
           </button>
         
           <button onClick={VedeoHandleClicked} className="border border-gray-300 shadow-lg rounded-lg py-6 flex flex-col items-center gap-1">
             <FiVideo size={22} />
             Video
           </button>
    </div> 
    );
};

export default TogolingBtn;