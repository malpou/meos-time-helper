import { Time } from "./../types";
import { difference, estimatedTime } from "../calculations";

const a = {
  hours: 1,
  minutes: 8,
  seconds: 12
} as Time;

const b = {
  hours: 1,
  minutes: 25,
  seconds: 59
} as Time;

test("Calculate Difference", () => {
  expect(difference(a, b)).toEqual({ hours: 0, minutes: 17, seconds: 47 } as Time);
});
