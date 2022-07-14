import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";
import { fetchUserDetailsRequest } from "../requests";

export const fetchUserDetailsFromApi = createAsyncThunk(
  "userDetails/fetchUserDetails",
  async (userId) => {
    return fetchUserDetailsRequest(userId);
  }
);

export const updateUserDetailsToApi = createAsyncThunk(
  "userDetails/updateUserDetails",
  async (details) => {
    const { userId, ...updatedDetails } = details;
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updatedDetails);
  }
);

function updateDetails(state, action) {
  for (let property in action.payload) {
    state[property] = action.payload[property];
  }
}
