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
`;

export default GlobalStyles ;