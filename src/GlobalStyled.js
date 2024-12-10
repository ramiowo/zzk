import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream2.otf') format('opentype');
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream3.otf') format('opentype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream4.otf') format('opentype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream5.otf') format('opentype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream6.otf') format('opentype');
    font-style: normal;
    font-weight: 600;
  }

  body {
    font-family: 'SCDream', sans-serif;
    background-repeat: no-repeat;
    background-position: center;
    background: linear-gradient(to bottom,#ECCBD3,#F5F5F5);
  }
`;
