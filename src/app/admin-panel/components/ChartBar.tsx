import { Progress, ProgressProps } from "antd";

const data = [
  { top: 40, bottom: 30, color: ["#b1124a", "#ff3c66"] },
  { top: 60, bottom: 30, color: ["#b1124a", "#ff3c66"] },
  { top: 50, bottom: 30, color: ["#b1124a", "#ff3c66"] },

  { top: 30, bottom: 40, color: ["#0f90a0", "#00e0ff"] },
  { top: 45, bottom: 35, color: ["#0f90a0", "#00e0ff"] },
  { top: 35, bottom: 40, color: ["#0f90a0", "#00e0ff"] },

  { top: 60, bottom: 25, color: ["#a04d00", "#ffa500"] },
  { top: 45, bottom: 25, color: ["#a04d00", "#ffa500"] },
  { top: 40, bottom: 20, color: ["#a04d00", "#ffa500"] },
];

export default function ChartBar() {
    const oneColors: ProgressProps['strokeColor'] = {
        '0%': '#5fc9f3',
        '100%': '#5fc9f3',
    };
    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#ec729c',
        '100%': '#ec729c',
    };
  return (
   <div className="flex flex-col gap-3 mt-4 text-white">
     <div className="flex items-end justify-center gap-2">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col-reverse h-40 w-5 rounded-sm overflow-hidden">
          <div
            className="w-full"
            style={{
              height: `${item.bottom}%`,
              backgroundColor: item.color[1],
            }}
          />
          <div
            className="w-full"
            style={{
              height: `${item.top}%`,
              backgroundColor: item.color[0],
            }}
          />
        </div>
      ))}
    </div>
      <Progress percent={55} strokeColor={oneColors} className="text-white"/>
      <Progress percent={76} strokeColor={twoColors} className="text-white"/>
   </div>
  );
}
