/**
 *  @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { trimAllValues } from "../index";

test("trims all values in an object", () => {
  const testObject = {
    name: "   Name",
    age: 45,
    username: " username   ",
  };

  const updatedObject = trimAllValues(testObject);

  const expectedObject = {
    name: "Name",
    age: 45,
    username: "username",
  };

  expect(updatedObject).toMatchObject(expectedObject);
});
