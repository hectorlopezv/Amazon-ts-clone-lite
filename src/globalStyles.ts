import {createGlobalStyle} from 'styled-components';

const GlobalStyles =  createGlobalStyle<any>`
    * 
    {
    margin: 0;
    padding: 0;
    }
    *, *::after, *::before 
    {
        box-sizing: inherit;
    }
    html 
    {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background-color: rgb(234, 237, 237);

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
    

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

export default GlobalStyles ;