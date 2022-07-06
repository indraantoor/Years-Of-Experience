import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg: #EEF4ED;
    --primary: #13315C;
    --secondary: #134074;
    --primary-accent: #0B2545;
    --secondary-accent: #8DA9C4; 
    --primary-white: #EEF4ED;
    --primary-black: rgb(41, 41, 41);
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  body {
    background-color: var(--main-bg);
    color: var(--primary-black);
  }
`;
