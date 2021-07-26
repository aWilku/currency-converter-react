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
    background-color: ${({ theme }) => theme.colors.gallery};
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Lato', sans-serif; 
    }
`;