import React from "react";
import { GlobalStyle } from "./App.style";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Footer />
    </React.Fragment>
  );
};

export default App;
