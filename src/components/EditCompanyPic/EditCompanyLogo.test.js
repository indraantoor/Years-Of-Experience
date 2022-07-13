/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditCompanyPic } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { create } from "react-test-renderer";

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

test("renders correctly", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditCompanyPic />
      </Provider>
    </StaticRouter>
  );

  const tree = create(
    <StaticRouter>
      <Provider store={store}>
        <EditCompanyPic />
      </Provider>
    </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
