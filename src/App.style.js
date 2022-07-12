import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg: #f2f5f5;
    --primary: #011627;
    --secondary: #2EC4B6;
    --primary-accent: #FF9F1C;
    --secondary-accent: #E71D36; 
    --primary-white: #FDFFFC;
    --primary-black: #011627;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  body {
    background-color: var(--main-bg);
    color: var(--primary-black);
  }
`;
