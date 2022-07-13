/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { EditBasicDetails } from ".";
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

jest.mock("../../firebase-config.js", () => ({
  getStorage: "nknk",
}));

test("renders correctly", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditBasicDetails />
      </Provider>
    </StaticRouter>
  );

  const tree = create(
    <StaticRouter>
      <Provider store={store}>
        <EditBasicDetails />
      </Provider>
    </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test("username has no spaces", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <EditBasicDetails />
      </Provider>
    </StaticRouter>
  );

  function hasInputValue(e, inputValue) {
    return screen.getByDisplayValue(inputValue) === e;
  }

  const inputValue = "user name";
  const usernameInput = screen.getByLabelText("Username");
  fireEvent.change(usernameInput, { target: { value: inputValue } });

  expect(hasInputValue(usernameInput, "username")).toBe(true);
});
