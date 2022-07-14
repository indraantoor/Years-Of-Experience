/**
 *  @jest-environment jsdom
 */
import React from "react";
import { renderWithContext } from "../../test-utils";
import { screen } from "@testing-library/react";
import { AboutYou } from ".";
import "@testing-library/jest-dom";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { fetchExperiencesRequest } from "../../store/requests";

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
  fetchExperiencesRequest: jest.fn(),
}));

describe("loading", () => {
  test("basic user details should be initially loading", async () => {
    renderWithContext(<AboutYou />);
    expect(screen.getByTestId("loading")).toBeDefined();
    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  });

  test("work experiences should be initially loading", async () => {
    renderWithContext(<AboutYou />);
    expect(screen.getByTestId("experienceLoading")).toBeDefined();
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("experienceLoading")
    );
  });
});

describe("work experiences", () => {
  test("work experiences should be visibile if data present", async () => {
    fetchExperiencesRequest.mockImplementation(async (userId) => {
      return [
        {
          id: 1,
          jobTitle: "SDE 1",
          startDate: "2016-5-18",
          endDate: "2017-6-12",
          companyName: "Amazon",
          companyLogo:
            "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
          jobDescription: "Hello",
          isCurrentlyWorking: false,
        },
      ];
    });
    const { store } = renderWithContext(<AboutYou />);
    expect(screen.getByTestId("experienceLoading")).toBeDefined();
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("experienceLoading")
    );
    const state = store.getState();
    const data = state.workExperiences.data;
    const isDataEmpty = data.length == 0;
    expect(isDataEmpty).toBe(false);
    const workExperiences = screen.getByTestId("workExperiences");
    expect(workExperiences).toBeInTheDocument();
  });

  test("empty data text should be visibile if data is empty", async () => {
    fetchExperiencesRequest.mockImplementation(async (userId) => {
      return [];
    });
    const { store } = renderWithContext(<AboutYou />);
    expect(screen.getByTestId("experienceLoading")).toBeDefined();
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("experienceLoading")
    );
    const state = store.getState();
    const data = state.workExperiences.data;
    const isDataEmpty = data.length == 0;
    expect(isDataEmpty).toBe(true);
    const workExperiences = screen.getByTestId("emptyExperiencesData");
    expect(workExperiences).toBeInTheDocument();
  });
});
