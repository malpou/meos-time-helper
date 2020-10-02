import { Time } from "./types";

export function ms2sec(ms: number): number {
  return ms / 10;
}

export function sec2time(sec: number): Time {
  return {
    hours: Math.floor(sec / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: Math.floor((sec % 3600) % 60)
  };
}

export function time2sec(time: Time): number {
  const { hours, minutes, seconds } = time;
  return hours * 60 * 60 + minutes * 60 + seconds;
}
