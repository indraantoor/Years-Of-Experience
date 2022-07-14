/**
 *  @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { uploadPic } from "./helpers";
import { uploadBytesResumable } from "@firebase/storage";

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

test("uploads an image successfully", () => {
  uploadBytesResumable.mockImplementation(() => {
    return {
      on: () => {},
    };
  });
  const file = {
    name: "picture",
  };
  uploadPic(file);
  expect(uploadBytesResumable).toBeCalled();
});
