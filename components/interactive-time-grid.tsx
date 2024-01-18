import React from "react";
import { lunches } from "@/data/test-data";

function middleTime(startTime: Date, endTime: Date) {
  return new Date((startTime.getTime() + endTime.getTime()) / 2);
}
function averageTime(times: Date[]) {
  const total = times.reduce((acc, time) => acc + time.getTime(), 0);
  const averageMilliseconds = total / times.length;
  const roundedMilliseconds =
    Math.round(averageMilliseconds / (30 * 60 * 1000)) * (30 * 60 * 1000);
  const roundedTime = new Date(roundedMilliseconds);
  console.log(
    "Average Time:",
    roundedTime.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );
  return roundedTime;
}

function getMedianTimes() {
  let times = [];

  for (let i = 0; i < lunches.length; i++) {
    const lunch = lunches[i];
    const shiftStart = new Date(lunch.shiftStart);
    const shiftEnd = new Date(lunch.shiftEnd);
    const middle = middleTime(shiftStart, shiftEnd);
    times.push(middle);
    console.log(`Lunch ${i}: ${shiftStart} - ${shiftEnd} => ${middle}`);
  }

  console.log("times:", times);

  return times;
}

export default function InteractiveTimeGrid() {
  const medianTimes = getMedianTimes();
  const average = averageTime(medianTimes);
  const startTimeGrid = new Date(average.getTime() - 6 * 60 * 60 * 1000);
  const gridTimes = () => {
    let times = [];

    for (let i = 0; i < 12; i++) {
      const time = new Date(startTimeGrid.getTime() + i * 60 * 60 * 1000);
      console.log(
        time.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
      times.push(time);
    }

    return times;
  };

  return (
    <div className="grid grid-cols-24 bg-slate-500">
      {gridTimes().map((time, index) => (
        <div key={index} className="bg-slate-400 col-span-2">
          {time.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
      ))}
    </div>
  );
}
