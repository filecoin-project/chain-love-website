import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../';
import EuropaWoff from '../fonts/europa/europa-regular.woff';
import EuropaWoff2 from '../fonts/europa/europa-regular.woff2';
import BrandonGrotesqueWoff from '../fonts/brandon-grotesque/brandon-grotesque-medium.woff';
import BrandonGrotesqueWoff2 from '../fonts/brandon-grotesque/brandon-grotesque-medium.woff2';

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  @font-face {
        font-family: 'Europa';
        src: local('Europa'), local('Europa'),
        url(${EuropaWoff2}) format('woff2'),
        url(${EuropaWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Brandon-Grotesque';
        src: local('Brandon-Grotesque'), local('Brandon-Grotesque'),
        url(${BrandonGrotesqueWoff2}) format('woff2'),
        url(${BrandonGrotesqueWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    ::-webkit-scrollbar { 
    width: 0;
    height: 0;
    }
  }
  
  body {
    font-family: ${({theme: {fonts: {rubik}}}) => rubik};
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

span{
  font-size:1.1rem;
  font-family:'Rubik',sans-serif;
}

/* .hljs{
  background:#1e1e1e !important
} */

`;
