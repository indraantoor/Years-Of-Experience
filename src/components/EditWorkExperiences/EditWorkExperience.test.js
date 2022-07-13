/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
