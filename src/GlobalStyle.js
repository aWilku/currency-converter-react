import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import background from "./images/background.jpg"

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    background-image: url("${background}");
    background-color: #f0f0f0;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Lato', sans-serif; 
    }
`;