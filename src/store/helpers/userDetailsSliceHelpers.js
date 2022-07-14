import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";
import { fetchUserDetailsRequest, updateUserDetailsRequest } from "../requests";

export const fetchUserDetailsFromApi = createAsyncThunk(
  "userDetails/fetchUserDetails",
  async (userId) => {
    return fetchUserDetailsRequest(userId);
  }
);

export const updateUserDetailsToApi = createAsyncThunk(
  "userDetails/updateUserDetails",
  async (details) => {
    return updateUserDetailsRequest(details);
  }
);
