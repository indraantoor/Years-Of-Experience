import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase-config";
import {
  fetchUserDetailsFromApi,
  updateUserDetailsToApi,
} from "./helpers/userDetailsSliceHelpers";

const initialState = {
  loading: true,
  error: false,
  redirect: false,
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    update: updateDetails,
  },
  extraReducers: {
    [fetchUserDetailsFromApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.redirect = false;
    },
    [fetchUserDetailsFromApi.fulfilled]: (state, action) => {
      updateDetails(state, action);
      state.loading = false;
      state.error = false;
      state.redirect = false;
    },
    [fetchUserDetailsFromApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.redirect = false;
    },
    [updateUserDetailsToApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.redirect = false;
    },
    [updateUserDetailsToApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.redirect = true;
    },
    [updateUserDetailsToApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.redirect = false;
    },
  },
});

function updateDetails(state, action) {
  for (let property in action.payload) {
    state[property] = action.payload[property];
  }
}
