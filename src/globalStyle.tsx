import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html {
	    scroll-behavior: smooth;
    }

    @media(max-width:768px){
        h1, h2, h3, h4, h5 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 1.3;
        }
        h1 {
            margin-top: 0;
            font-size: 1.802rem;
        }

        h2 {font-size: 1.602rem;}
        
        h3 {font-size: 1.424rem;}
        
        h4 {font-size: 1.266rem;}
        
        h5 {font-size: 1.125rem;}

        small, .text_small {font-size: 0.889rem;}
    }

`

export default GlobalStyle