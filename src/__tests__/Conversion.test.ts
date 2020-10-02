import { Time } from "./../types";
import { sec2time, time2sec, ms2sec } from "../conversion";

test("Deci Seconds to Time Object", () => {
  expect(sec2time(ms2sec(40920))).toEqual({ hours: 1, minutes: 8, seconds: 12 } as Time);
  expect(sec2time(ms2sec(746300))).toEqual({ hours: 20, minutes: 43, seconds: 50 } as Time);
});

test("Time Object to Seconds", () => {
  expect(time2sec({ hours: 1, minutes: 8, seconds: 12 } as Time)).toEqual(4092);
});

test("mSec to Sec", () => {
  expect(ms2sec(40920)).toEqual(4092);
  expect(ms2sec(746300)).toEqual(74630);
});
