import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// self-host (npm) 폰트: 네가 실제로 쓰는 weight만 임포트
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/700.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/nerko-one"; // 단일 weight

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 국문 기본 폰트: SUIT (CDN) */
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-default: 'SUIT', system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
    --font-default-eng: 'Exo 2', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --font-serif: 'Merriweather', Georgia, 'Times New Roman', serif;
    --font-accent: 'Nerko One', cursive;

    --font-title: 8.4rem;
    --font-sub-title: 4rem;
    --font-text-large: 1.7rem;
    --font-text: 1.3rem;
    --font-text-small: 0.9rem;

    --font-weight-thin: 300;
    --font-weight-default: 400;
    --font-weight-semi-bold: 500;
    --font-weight-bold: 700;

    --background-color: #f4f4f8;
    --grey-color: #f5f5f7;
    --main-color-pink: #f989b3;
    --main-color-pink-hover: #f76a9c;
    --main-color-green: #56dfb4;
    --font-color: #000000;
    --font-gray-color: #666;
    --default-width: 88%;
    --default-radius: 0.75rem;
    --default-radius-small: 0.37rem;
    --border-style: 1px solid #ccc;
    --noise-background: url('/texture_background.webp');
    --noise-opacity: 0.01;

    @media (max-width: 1348px) {
      --default-width: 92%;
      --font-title: 4.4rem;
      --font-sub-title: 2.8rem;
      --font-text: 1.2rem;
    }

    @media (max-width: 734px) {
      --font-title: 3.4rem;
      --font-sub-title: 2rem;
      --font-text-large: 1.3rem;
      --font-text: 1rem;
      --font-text-small: 0.7rem;
    }
  }

  * {
    position: relative;
    box-sizing: border-box;
  }

  html { font-size: 1rem; }

  body {
    font-family: var(--font-default);
    font-size: var(--font-text);
    color: var(--font-color);
    font-weight: var(--font-weight-default);
    background: var(--background-color);
  }

  a { text-decoration: none; color: var(--font-color); }

  button {
    border: none;
    border-radius: var(--default-radius-small);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
  }

  section {
    width: 100%;
    border-radius: var(--default-radius);
  }

  *::before {
    content: "";
    z-index: 102;
    pointer-events: none;
    mix-blend-mode: exclusion;
    background-image: var(--noise-background);
    opacity: var(--noise-opacity);
    background-position: 0 0;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0% auto auto 0%;
  }
`;

export default GlobalStyle;
