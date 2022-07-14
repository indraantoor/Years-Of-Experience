import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";
import { fetchExperiencesRequest } from "../requests";

export const fetchWorkExperiencesFromApi = createAsyncThunk(
  "workExperiences/fetchWorkExperiences",
  async (userId) => {
    return fetchExperiencesRequest(userId);
  }
);

export const updateWorkExperienceToApi = createAsyncThunk(
  "workExperiences/updateWorkExperience",
  async (details) => {
    const { userId, id, ...updatedDetails } = details;
    const workExperienceRef = doc(db, "users", userId, "workExperiences", id);
    const response = await updateDoc(workExperienceRef, updatedDetails);
    return response;
  }
);

export function updateWorkExperience(state, action) {
  const selectedItemIndex = state.data.findIndex(
    (experience) => experience.id == action.payload.id
  );

  for (let property in action.payload) {
    state.data[selectedItemIndex][property] = action.payload[property];
  }
}

export function deleteWorkExperience(state, action) {
  state.splice(
    state.findIndex((item) => item._id === action.payload),
    1
  );
}
