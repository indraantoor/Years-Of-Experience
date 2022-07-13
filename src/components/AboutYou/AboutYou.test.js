/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AboutYou } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { create } from "react-test-renderer";
import {
  waitForElementToBeRemoved,
  waitFor,
  waitForNextUpdate,
} from "@testing-library/react";
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

test("basic user details should be initially loading", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <AboutYou />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("loading")).toBeDefined();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
});

test("work experiences should be initially loading", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <AboutYou />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("experienceLoading")).toBeDefined();
  await waitForElementToBeRemoved(() =>
    screen.queryByTestId("experienceLoading")
  );
});
