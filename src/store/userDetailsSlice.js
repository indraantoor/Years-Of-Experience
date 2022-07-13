import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase-config";

const initialState = {
  // id: 1,
  // name: "Indraan S Toor",
  // username: "indraantoor",
  // profilePic:
  //   "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // age: 20,
  loading: true,
  error: false,
  redirect: false,
};

export const fetchUserDetailsFromApi = createAsyncThunk(
  "userDetails/fetchUserDetails",
  async (userId) => {
    const userRef = doc(db, "users", userId);
    const user = await getDoc(userRef);
    const response = { ...user.data(), id: userId };
    return response;
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
