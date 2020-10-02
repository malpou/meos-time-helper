import { Time } from "./types";
import { time2sec, sec2time } from "./conversion";

export function difference(first: Time, second: Time): Time {
  return sec2time(time2sec(second) - time2sec(first));
}

export function estimatedTime(time: Time): Time {
  const timeNow = new Date();
  const currentTime = {
    hours: timeNow.getHours(),
    minutes: timeNow.getMinutes(),
    seconds: timeNow.getSeconds()
  } as Time;
  return difference(currentTime, time);
}
