/**
 *  @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { isValidDuration } from "../index";

test("returns true if duration is valid", () => {
  let startDate = new Date("2017-8-12");
  let endDate = new Date("2018-3-13");

  const isValid = isValidDuration(startDate, endDate);

  expect(isValid).toBe(true);
});

test("returns false if duration is valid", () => {
  let startDate = new Date("2018-8-12");
  let endDate = new Date("2017-3-13");

  const isValid = isValidDuration(startDate, endDate);

  expect(isValid).toBe(false);
});
