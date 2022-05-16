import React from 'react'
import Bold from "./Inter-Bold.ttf";
import "@fontsource/inter";
import { createGlobalStyle } from "styled-components";

const fonts =createGlobalStyle`
@font-face {
    font-family: "inter bold";
    src: url("./Inter-Thin.ttf"};
}
`;
export default fonts;