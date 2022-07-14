/**
 *  @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/react";
import { Profile } from ".";
import "@testing-library/jest-dom";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithContext } from "../../test-utils";

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
  getStorage: "nknk",
}));

describe("profile page loading states", () => {
  test("basic user details should be initially loading", async () => {
    renderWithContext(<Profile />);

    expect(screen.getByTestId("loading")).toBeDefined();
    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  });

  test("work experiences should be initially loading", async () => {
    renderWithContext(<Profile />);

    expect(screen.getByTestId("experienceLoading")).toBeDefined();
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("experienceLoading")
    );
  });
});
