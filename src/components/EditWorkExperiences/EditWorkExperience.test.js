/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { EditWorkExperiences } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/index";

jest.mock("@firebase/firestore", () => ({
  doc: "hell",
  getDoc: "jk",
  updatedoc: "jkjkj",
  initializeApp: (m) => {},
  getFirestore: "dkendk",
  enableIndexedDbPersistence: "nknkn",
}));

// jest.mock("../../store/helpers/workExperiencesSliceHelpers", () => {
//   return {
//     async fetchWorkExperiencesFromApi(userId) {
//       let response = [];
//       return response;
//     },
//     async updateWorkExperienceToApi(detail) {
//       return [];
//     },
//     updateWorkExperience() {
//       return [];
//     },
//     deleteWorkExperience() {
//       return [];
//     },
//   };
// });

// jest.mock("../../firebase-config.js", () => ({
//   db: "hell",
// }));

jest.mock("@firebase/storage", () => ({
  ref: "",
  uploadBytesResumable: "",
  getDownloadURL: "",
}));

jest.mock("../../firebase-config.js", () => ({
  getStorage: "nknk",
}));

test("should be initially loading", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditWorkExperiences />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("loading")).toBeDefined();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
});

test("end date should be disabled if checkbox checked", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditWorkExperiences />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("loading")).toBeDefined();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  const endDateInput = screen.getByTestId("endDate");
  const isCurrentlyWorkingCheckbox = screen.getByTestId("isCurrentlyWorking");

  fireEvent.change(endDateInput, { target: { value: "2018-7-13" } });
  fireEvent.click(isCurrentlyWorkingCheckbox);

  expect(isCurrentlyWorkingCheckbox.checked).toBe(true);
  expect(endDateInput).toBeDisabled();
});

test("end date should not be disabled if checkbox not checked", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditWorkExperiences />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("loading")).toBeDefined();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  const endDateInput = screen.getByTestId("endDate");
  const isCurrentlyWorkingCheckbox = screen.getByTestId("isCurrentlyWorking");

  expect(isCurrentlyWorkingCheckbox.checked).toBe(false);
  expect(endDateInput).not.toBeDisabled();
});

test("end date should not be disabled if checkbox checked then unchecked", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditWorkExperiences />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("loading")).toBeDefined();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  const endDateInput = screen.getByTestId("endDate");
  const isCurrentlyWorkingCheckbox = screen.getByTestId("isCurrentlyWorking");

  fireEvent.change(endDateInput, { target: { value: "2018-7-13" } });
  fireEvent.click(isCurrentlyWorkingCheckbox);
  expect(isCurrentlyWorkingCheckbox.checked).toBe(true);
  fireEvent.click(isCurrentlyWorkingCheckbox);
  expect(isCurrentlyWorkingCheckbox.checked).toBe(false);

  expect(endDateInput).not.toBeDisabled();
});
