import React from 'react';
import FriendPage from './friend/page';
                                            
const page = () => {
  return (
    <div className='min-h-screen'>
        <div className="max-w-5xl mx-auto p-10">

   
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mt-2">
        Your personal side of meaningful connections. Browse, tend, and nurture the people that matter most.
      </p>

      <button
        className="mt-5 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md text-sm font-medium"
      >
        + Add a Friend
      </button>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-3xl font-bold ">10</h2>
        <p className="text-gray-500 text-sm mt-2">Total Friends</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-3xl font-bold ">3</h2>
        <p className="text-gray-500 text-sm mt-2">On Track</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-3xl font-bold ">6</h2>
        <p className="text-gray-500 text-sm mt-2">Need Attention</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-3xl font-bold">12</h2>
        <p className="text-gray-500 text-sm mt-2">Interactions This Month</p>
      </div>
    </div>


   <div className='mt-10'>
     <hr className='text-gray-400'></hr>
   </div>

     <div>
        <FriendPage></FriendPage>
      </div>
  
   </div>
     
    </div>
    
  );
};

export default page;