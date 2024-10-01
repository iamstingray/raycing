import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #0d0d0d;
    color: #ffffff;
    webkit-font-smoothing: antialiased;
    moz-osx-font-smoothing: grayscale;
  },
  img {
  max-width: 100%;
  height: auto;
},
  body, html {
    overflow-x: hidden;
},
  html {
    scroll-behavior: smooth;
},
  button, a {
  transition: all 0.3s ease;
},
  button:hover, a:hover {
  transform: translateY(-2px);
}
`

export default GlobalStyles
