import React from "react";
import { lunches } from "@/data/test-data";

function middleTime(startTime: Date, endTime: Date) {
  return new Date((startTime.getTime() + endTime.getTime()) / 2);
}
function averageTime(times: Date[]) {
  const total = times.reduce((acc, time) => acc + time.getTime(), 0);
  console.log("Average Time:", new Date(total / times.length).toLocaleString());
  return new Date(total / times.length);
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
  return (
    <div className="grid grid-cols-24 bg-slate-500">
      <div className="col-span-6 bg-yellow-300">test</div>
    </div>
  );
}
