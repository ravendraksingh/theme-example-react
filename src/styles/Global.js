import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
body {
    // background-color: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
    font-family: Nunito Sans;
    font-size: 14px;
    overflow-x: hidden;
  }
`;
