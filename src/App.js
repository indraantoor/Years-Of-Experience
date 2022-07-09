import React from "react";
import { GlobalStyle } from "./App.style";
import { Home } from "./pages/Home";
import { MainPageLayout } from "./pages/shared/MainPageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/shared/PageNotFound";
import { EditProfile } from "./pages/EditProfile";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <MainPageLayout>
          <Routes>
            <Route path="/profile/:id/edit" element={<EditProfile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainPageLayout>
      </React.Fragment>
    </Router>
  );
};

export default App;
