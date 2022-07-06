import React from "react";
import { GlobalStyle } from "./App.style";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
};

export default App;
