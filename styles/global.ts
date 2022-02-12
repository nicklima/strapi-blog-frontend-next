import { createGlobalStyle } from "styled-components"
import { theme } from "styles/theme"

export default createGlobalStyle`
  :root {
    --font-default: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --font-code: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
    --font-heading: Staatliches;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }

  body, input, button{
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${theme.bg};
    font-family: var(--font-default);
    font-size: 16px;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
   color: inherit;
  }

  li {
    list-style: none;
  }
`
