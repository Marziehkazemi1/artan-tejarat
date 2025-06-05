"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SemiCircleProgressDelete(props:{
    value: number;
}) {
  return (
    <div>
        <div className="w-40 h-20 overflow-hidden">
      <CircularProgressbarWithChildren
        value={props.value}
        maxValue={100}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: `#4b0082`,
          trailColor: "#4f3b78",
        })}
      >
        <span className="text-white text-xl font-bold mb-10">{props.value}%</span>      
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#9d53c3" />
              <stop offset="100%" stopColor="#4b0082" />
            </linearGradient>
          </defs>
        </svg>
      </CircularProgressbarWithChildren>
    </div>
    <div className="w-40 h-2 rounded-md bg-[#4b0082] mt-4"></div>
    <p className="font-bold mt-4">میزان گزارشات حذف شده</p>
    </div>
  );
}
