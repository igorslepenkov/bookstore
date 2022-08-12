import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 1120px;
        margin: auto;
    }
`;
