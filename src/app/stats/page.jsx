"use client";

import { FriendsContext } from "@/contex/ContexProvider";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(FriendsContext);

  console.log(timeline,'timeline');

  const textCount = timeline.filter(
    (item) => item.type?.toLowerCase() === "text"
  ).length;

  const audioCount = timeline.filter(
    (item) => item.type?.toLowerCase() === "call"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type?.toLowerCase() === "video"
  ).length;

  const data = [
    { name: "Text", value: textCount, fill: "#0088FE" },
    { name: "call", value: audioCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mt-4 p-2">Friendship Analytics</h1>

      <div className="flex justify-center items-center border border-white shadow-xl m-4 bg-[#FFFFFF]">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={150}
            paddingAngle={5}
            dataKey="value"
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;