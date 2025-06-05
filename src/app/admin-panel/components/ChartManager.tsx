"use client";
import ReactECharts from "echarts-for-react";

export default function ChartManager() {
  const options = {
    title: {
      text: " میزان گزارش",
      left: "center",
      textStyle: {
        fontFamily: "inherit",
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "میزان گزارش",
        type: "line",
        smooth: false,
        data: [120, 200, 150, 80, 70, 110, 130],
        areaStyle: {},
        lineStyle: {
          color: "#2772db",
        },
        itemStyle: {
          color: "#2772db",
        },
      },
    ],
  };

  return (
    <div className="w-[300px] md:w-[400px] bg-white/10 items-center justify-between mt-8 backdrop-blur-md border border-white/30 rounded-xl shadow-md">
      <ReactECharts option={options} style={{ height: 250 }} />
    </div>
  );
}
