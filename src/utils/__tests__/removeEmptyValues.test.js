/**
 *  @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { removeEmptyValues } from "../index";

test("removes empty values in an object", () => {
  const testObject = {
    name: "Name",
    age: 45,
    username: "",
  };

  const updatedObject = removeEmptyValues(testObject);

  const expectedObject = {
    name: "Name",
    age: 45,
  };

  expect(updatedObject).toMatchObject(expectedObject);
});
