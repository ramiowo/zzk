import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
@font-face {
    font-family: 'SCDream';
    src: url('./fonts/SCDream2.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('./fonts/SCDream3.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'SCDream';
    src: url('./fonts/SCDream4.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'SCDream';
    src: url('./fonts/SCDream5.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'SCDream';
    src: url('./fonts/SCDream6.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'SCDream', sans-serif;
    background-repeat: no-repeat;
    background-position: center;
    background: linear-gradient(to bottom,#ECCBD3,#F5F5F5);
  }
`;
