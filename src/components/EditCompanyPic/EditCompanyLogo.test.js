/**
 *  @jest-environment jsdom
 */
import React from "react";
import { EditCompanyPic } from ".";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { uploadPic } from "./helpers";
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
  getStorage: jest.fn(),
}));

jest.mock("./helpers.js", () => ({
  uploadPic: jest.fn(),
}));

describe("update company logo image", () => {
  test("uploads an image successfully", () => {
    uploadPic.mockImplementation(() => {});
    renderWithContext(<EditCompanyPic />);
    const updateBtn = screen.getByTestId("updateBtn");
    fireEvent.click(updateBtn);
    expect(uploadPic).toBeCalled();
  });
});
