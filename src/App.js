import React from "react";
import { GlobalStyle } from "./App.style";
import { Home } from "./pages/Home";
import { MainPageLayout } from "./pages/shared/MainPageLayout";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainPageLayout>
        <Home />
      </MainPageLayout>
    </React.Fragment>
  );
};

export default App;
