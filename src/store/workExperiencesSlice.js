import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWorkExperiencesFromApi,
  updateWorkExperienceToApi,
  updateWorkExperience,
  deleteWorkExperience,
} from "./helpers/workExperiencesSliceHelpers";

const initialState = {
  data: [],
  loading: true,
  error: false,
  redirect: false,
};

const reducers = {
  update: updateWorkExperience,
  delete: deleteWorkExperience,
};

export const workExperiencesSlice = createSlice({
  name: "workExperiences",
  initialState,
  reducers: reducers,
  extraReducers: {
    [fetchWorkExperiencesFromApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.redirect = false;
    },
    [fetchWorkExperiencesFromApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.redirect = false;
    },
    [fetchWorkExperiencesFromApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.redirect = false;
    },
    [updateWorkExperienceToApi.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.redirect = false;
    },
    [updateWorkExperienceToApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.redirect = true;
    },
    [updateWorkExperienceToApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.redirect = false;
    },
  },
});

export default workExperiencesSlice.reducer;
