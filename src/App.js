import React from "react";
import { GlobalStyle } from "./App.style";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      Years Of Experience
    </React.Fragment>
  );
};

export default App;
