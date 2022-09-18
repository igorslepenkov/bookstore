import { createGlobalStyle } from "styled-components";
import { Color } from "./color";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
      overflow-x: hidden;
      background-color: ${Color.White};
    }

    html[theme="dark"] {
      --main-black: #FFFFFF;
      --main-grey: #dfbcbc;
      --grey-light: #eff5f5;
      --main-blue: #D7E4FD;
      --main-orange: #fa9b7b;
      --main-white: #313037;
      --pink-light: #9554f7;
      --main-danger: #DF4759;
      --main-success: #22BB33;
    }

    html[theme="light"] {
      --main-black: #313037;
      --main-grey:#A8A8A8;
      --grey-light: #faf1f1;
      --main-blue: #D7E4FD;
      --main-orange: #f0b29e;
      --main-white: #FFFFFF;
      --pink-light: #F4EEFD;
      --main-danger: #DF4759;
      --main-success: #22BB33;
    }
`;
