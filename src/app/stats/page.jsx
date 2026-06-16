"use client"
import { FriendsContext } from '@/contex/ContexProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

 


const StatsPage = () => {
    const { timeline, setTimeline } = useContext(FriendsContext);

    const data = [
  { name: 'text', value:timeline.length, fill: '#0088FE' },
  { name: 'audeo', value: timeline.length, fill: '#00C49F' },
  { name: 'video', value: timeline.length, fill: '#FFBB28' },
  
];

    return (
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-3xl font-bold mt-4'>Friendship Analytics</h1>
  <div className='flex justify-center items-center border border-white shadow-xl m-4 bg-[#FFFFFF]'>
    
          <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>

  </div>
        </div>
    );
};

export default StatsPage;