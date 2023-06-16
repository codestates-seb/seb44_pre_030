import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
     *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color:inherit;
    }
    ul,ol{
        padding:0;
    }
    li{
        list-style: none;
    }
`

export default GlobalStyles;