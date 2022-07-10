import { configureStore } from "@reduxjs/toolkit";
import { userDetailsSlice } from "./userDetailsSlice";
import { workExperiencesSlice } from "./workExperiencesSlice";

export const store = configureStore({
  reducer: {
    userDetails: userDetailsSlice.reducer,
    workExperiences: workExperiencesSlice.reducer,
  },
});
