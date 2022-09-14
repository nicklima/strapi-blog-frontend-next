import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: 'Staatliches';
    font-style: normal;
    font-weight: 400;
    src: local('Staatliches Regular'),
         local('Staatliches-Regular'),
         url('/font/families/Staatliches/Staatliches-Regular.woff2') format('woff2');
    font-display: swap;
  }

  :root {
    --font-default: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif;
    --font-code: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono",
    "Droid Sans Mono", "Courier New", monospace;
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
    background: ${({ theme }) => theme.bg};
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
