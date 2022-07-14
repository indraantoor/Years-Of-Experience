/**
 *  @jest-environment jsdom
 */
import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { EditBasicDetails } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { create } from "react-test-renderer";
import { renderWithContext } from "../../test-utils";

import { Provider } from "react-redux";

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

jest.mock("../../store/requests.js", () => ({
  updateUserDetailsRequest: jest.fn(),
}));

test("renders correctly", () => {
  const { store } = renderWithContext(<EditBasicDetails />);

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
  renderWithContext(<EditBasicDetails />);

  function hasInputValue(e, inputValue) {
    return screen.getByDisplayValue(inputValue) === e;
  }

  const inputValue = "user name";
  const usernameInput = screen.getByLabelText("Username");
  fireEvent.change(usernameInput, { target: { value: inputValue } });

  expect(hasInputValue(usernameInput, "username")).toBe(true);
});
