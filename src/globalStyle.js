import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: content-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #ddd;
    }
`;

export default GlobalStyle;