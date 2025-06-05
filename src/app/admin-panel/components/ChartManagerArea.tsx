"use client";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

export default function ChartManagerArea() {
    const base = +new Date(2016, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    let valueBase = Math.random() * 300;
    let valueBase2 = Math.random() * 50;
    const data: [string, number][] = [];
    const data2: [string, number][] = [];
  
    for (let i = 1; i < 10; i++) {
      const now = new Date(base + i * oneDay);
      const dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-");
      valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
      valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
      data.push([dayStr, Math.max(valueBase, 10)]);
      data2.push([dayStr, Math.max(valueBase2, 5)]);
    }
  
    const options = {
      title: {
        text: "نمودار بازدید ساده",
        left: "center",
        textStyle: {
          fontFamily: "inherit",
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        top: 30,
        data: ["سری اول", "سری دوم"],
      },
      xAxis: {
        type: "category",
        data: data.map((d) => d[0]),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "سری اول",
          type: "line",
          smooth: true,
          data: data.map((d) => d[1]),
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(58,77,233,0.8)" },
              { offset: 1, color: "rgba(58,77,233,0.3)" },
            ]),
          },
          itemStyle: {
            color: "#0770FF",
          },
          symbolSize: 6,
        },
        {
          name: "سری دوم",
          type: "line",
          smooth: true,
          data: data2.map((d) => d[1]),
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(213,72,120,0.8)" },
              { offset: 1, color: "rgba(213,72,120,0.3)" },
            ]),
          },
          itemStyle: {
            color: "#F2597F",
          },
          symbolSize: 6,
        },
      ],
    };
  
    return (
        <div className="w-[300px] md:w-[400px] items-center justify-between mt-8">
        <ReactECharts option={options} style={{ height: 250 }} />
      </div>
    )
}
