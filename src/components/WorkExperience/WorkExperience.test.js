/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { WorkExperience } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/index";

jest.mock("@firebase/firestore", () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  updatedoc: jest.fn(),
  initializeApp: jest.fn(),
  getFirestore: jest.fn(),
  enableIndexedDbPersistence: jest.fn(),
}));

jest.mock("@firebase/storage", () => ({
  ref: jest.fn(),
  uploadBytesResumable: jest.fn(),
  getDownloadURL: jest.fn(),
}));

jest.mock("../../firebase-config.js", () => ({
  getStorage: jest.fn(),
}));

test("work experience renders with props without crashing", () => {
  const props = {
    title: "SDE 1",
    startDate: "2014-8-13",
    endDate: "2015-4-2",
    isCurrentlyWorking: false,
    company: "Company",
    companyLogoUrl: "",
    description: "Job",
  };

  render(
    <StaticRouter>
      <Provider store={store}>
        <WorkExperience {...props} />
      </Provider>
    </StaticRouter>
  );
});

test("show end date as present if currently working", () => {
  const props = {
    title: "SDE 1",
    startDate: "2014-8-13",
    isCurrentlyWorking: true,
    company: "Company",
    companyLogoUrl: "",
    description: "Job",
  };

  render(
    <StaticRouter>
      <Provider store={store}>
        <WorkExperience {...props} />
      </Provider>
    </StaticRouter>
  );

  const endDateText = screen.getByTestId("endDateText");
  expect(endDateText).toHaveClass("isWorking");
  expect(endDateText).toHaveTextContent("Present");
});
