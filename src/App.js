import React from "react";
import { GlobalStyle } from "./App.style";
import { Home } from "./pages/Home";
import { MainPageLayout } from "./pages/shared/MainPageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <MainPageLayout>
          <Routes>
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MainPageLayout>
      </React.Fragment>
    </Router>
  );
};

export default App;
