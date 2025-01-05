import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800&display=swap');

  body {
    margin: 0;
    font-family: 'Lexend';
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
    font-family: 'Lexend';
  }

  input:focus, button:focus {
    outline: 2px solid #9336b4;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;