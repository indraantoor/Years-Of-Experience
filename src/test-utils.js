import { Provider } from "react-redux";
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { userDetailsSlice } from "./store/userDetailsSlice";
import { workExperiencesSlice } from "./store/workExperiencesSlice";
import { StaticRouter } from "react-router-dom/server";

function getStoreWithState(state) {
  const store = configureStore({
    reducer: {
      userDetails: userDetailsSlice.reducer,
      workExperiences: workExperiencesSlice.reducer,
    },
    state,
  });
  return store;
}

export function renderWithContext(children, state) {
  const store = getStoreWithState(state);
  render(
    <StaticRouter>
      <Provider store={store}>{children}</Provider>
    </StaticRouter>
  );

  return { store };
}

export function getStateWithItems(userDetails, workExperiences) {
  const state = {
    userDetails: {
      loading: true,
      error: false,
      redirect: false,
    },
    workExperiences: {
      data: [],
      loading: true,
      error: false,
      redirect: false,
    },
  };
  return state;
}
