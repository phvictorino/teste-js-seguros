import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Mono', monospace;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
