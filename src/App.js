import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./App.style";
import { Home } from "./pages/Home";
import { MainPageLayout } from "./pages/shared/MainPageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/shared/PageNotFound";
import { EditProfile } from "./pages/EditProfile";
import { BasicDetailsEdit } from "./pages/ BasicDetailsEdit";
import { WorkExperiencesEdit } from "./pages/WorkExperiencesEdit";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "./firebase-config";
import { fetchUserDetailsFromApi } from "./store/userDetailsSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = "V4QsOhuPZXQHXJ2Dw8QI";
    dispatch(fetchUserDetailsFromApi(userId));
  }, []);

  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <MainPageLayout>
          <Routes>
            <Route
              path="/profile/:profileId/edit/workexperience/:workExperienceId"
              element={<WorkExperiencesEdit />}
            />
            <Route
              path="/profile/:profileId/edit/basic"
              element={<BasicDetailsEdit />}
            />
            <Route path="/profile/:profileId/edit" element={<EditProfile />} />
            <Route path="/profile/:profileId" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainPageLayout>
      </React.Fragment>
    </Router>
  );
};

export default App;
