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

// const initialState = [
//   {
//     id: 1,
//     jobTitle: "Fullstack Intern",
//     startDate: "2014-2-18",
//     endDate: "2017-2-18",
//     companyName: "Microsoft",
//     companyLogo:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC",
//     jobDescription: "Hello",
//     isCurrentlyWorking: false,
//   },
//   {
//     id: 2,
//     jobTitle: "SDE 1",
//     startDate: "2016-5-18",
//     endDate: null,
//     companyName: "Amazon",
//     companyLogo:
//       "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
//     jobDescription: "Hello",
//     isCurrentlyWorking: true,
//   },
// ];

// export const fetchWorkExperiencesFromApi = createAsyncThunk(
//   "workExperiences/fetchWorkExperiences",
//   async (userId) => {
//     const workExperiencesRef = collection(
//       db,
//       "users",
//       userId,
//       "workExperiences"
//     );
//     const workExperiences = await getDocs(workExperiencesRef);
//     const response = workExperiences.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     return response;
//   }
// );

// export const updateWorkExperienceToApi = createAsyncThunk(
//   "workExperiences/updateWorkExperience",
//   async (details) => {
//     const { userId, id, ...updatedDetails } = details;
//     const workExperienceRef = doc(db, "users", userId, "workExperiences", id);
//     const response = await updateDoc(workExperienceRef, updatedDetails);
//     return response;
//   }
// );

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

// function updateWorkExperience(state, action) {
//   const selectedItemIndex = state.data.findIndex(
//     (experience) => experience.id == action.payload.id
//   );

//   for (let property in action.payload) {
//     state.data[selectedItemIndex][property] = action.payload[property];
//   }
// }

// function deleteWorkExperience(state, action) {
//   state.splice(
//     state.findIndex((item) => item._id === action.payload),
//     1
//   );
// }
