import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

const globalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Roboto', sans-serif;
  color: #3a3a3a;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

input, button {
  border: 0;
}

button {
  cursor: pointer;
}

a {
  color: #3a3a3a;
  text-decoration: none;
}

`;

export default globalStyles;
