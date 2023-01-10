import { createGlobalStyle } from "styled-components";
import normalize from "./normalize.css";
import Montserrat from "./assets/fonts/Montserrat-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
    /* importing font */

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${Montserrat}) format('truetype');
    }

    /* Custom global styles */

    * {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }

    main {
        width: 86%;
        margin: auto;
    }

    /* normalize.css styles */

    ${normalize}
`;

export default GlobalStyle;
