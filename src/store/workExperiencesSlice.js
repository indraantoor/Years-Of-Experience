import { createSlice, nanoid } from "@reduxjs/toolkit";

const createWorkExperience = ({
  jobTitle,
  startDate,
  endDate = null,
  companyName,
  companyLogo,
  jobDescription,
  isCurrentlyWorking,
}) => ({
  id: nanoid(),
  jobTitle,
  startDate,
  endDate,
  companyName,
  companyLogo,
  jobDescription,
  isCurrentlyWorking,
});

const initialState = [
  {
    id: 1,
    jobTitle: "Fullstack Intern",
    startDate: "June 2014",
    endDate: "March 2017",
    companyName: "Microsoft",
    companyLogo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC",
    jobDescription: "Hello",
    isCurrentlyWorking: false,
  },
  {
    id: 2,
    jobTitle: "SDE 1",
    startDate: "June 2014",
    endDate: null,
    companyName: "Amazon",
    companyLogo:
      "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    jobDescription: "Hello",
    isCurrentlyWorking: true,
  },
];

export const workExperiencesSlice = createSlice({
  name: "workExperiences",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createWorkExperience(action.payload));
    },
    update: updateWorkExperience,
  },
});

function updateWorkExperience(state, action) {
  const selectedItemIndex = state.findIndex(
    (experience) => experience.id == action.payload.id
  );

  for (let property in action.payload) {
    state[selectedItemIndex][property] = action.payload[property];
  }
}
