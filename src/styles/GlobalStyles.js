import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}
body{
    font-family: 'Inter' ,sans-serif;;
    overflow-x:hidden;
    color: white;
    background-color:black;
}
h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
    color: white;
}
`;

export default GlobalStyles;