"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SemiCircleProgressAdd(props:{
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
          pathColor: `#c9356c`,
          trailColor: "#ff347f",
        })}
      >
        <span className="text-white text-xl font-bold mb-10">{props.value}%</span>      
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#c9356c" />
              <stop offset="100%" stopColor="#c9356c" />
            </linearGradient>
          </defs>
        </svg>
      </CircularProgressbarWithChildren>
    </div>
    <div className="w-40 h-2 rounded-md bg-[#c9356c] mt-4"></div>
    <p className="font-bold mt-4">میزان گزارشات اضافه شده</p>
    </div>
  );
}
