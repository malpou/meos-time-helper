import { difference, estimatedTime } from "./calculations";
import { ms2sec, sec2time, time2sec } from "./conversion";
import { Time } from "./types";

export const EstimatedTime = (time: Time): Time => {
  return estimatedTime(time);
};

export const Difference = (first: Time, second: Time): Time => {
  return difference(first, second);
};

export const Ms2Sec = (ms: number): number => {
  return ms2sec(ms);
};

export const Sec2Time = (sec: number): Time => {
  return sec2time(sec);
};

export const Time2Sec = (time: Time): number => {
  return time2sec(time);
};
