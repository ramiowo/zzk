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
    font-weight: 400; /* 일반 */
    font-style: normal;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream3.otf') format('opentype');
    font-weight: 700; /* 굵은 글씨 */
    font-style: normal;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream4.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream5.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SCDream';
    src: url('/fonts/SCDream6.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'SCDream', sans-serif;
  }
`;
