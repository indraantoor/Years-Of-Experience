/**
 *  @jest-environment jsdom
 */
import React from "react";
import { EditProfilePic } from ".";
import "@testing-library/jest-dom";
import { screen, fireEvent, findByRole, waitFor } from "@testing-library/react";
import { uploadPic } from "./helpers";
import { renderWithContext } from "../../test-utils";
import { fetchUserDetailsRequest } from "../../store/requests";

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

jest.mock("../../store/requests", () => ({
  fetchUserDetailsRequest: jest.fn(),
}));

describe("update company logo image", () => {
  test("uploads an image successfully", async () => {
    uploadPic.mockImplementation(() => {});
    fetchUserDetailsRequest.mockImplementation(() => {
      return {
        id: "1",
        name: "Name",
        username: "username",
        profilePic: "",
        age: 20,
      };
    });
    renderWithContext(<EditProfilePic />);
    const img = await screen.findByRole("img");
    await waitFor(() => {
      expect(img).toBeInTheDocument();
    });
    const updateBtn = screen.getByTestId("updateBtn");
    fireEvent.click(updateBtn);
    expect(uploadPic).toBeCalled();
  });
});
