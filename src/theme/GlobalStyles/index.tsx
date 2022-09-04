import { createGlobalStyle } from 'styled-components';
import { AppTheme } from '../';
import EuropaWoff from '../fonts/europa-regular.woff';
import EuropaWoff2 from '../fonts/europa-regular.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Europa';
        src: local('Europa'), local('Europa'),
        url(${EuropaWoff2}) format('woff2'),
        url(${EuropaWoff}) format('woff');
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
    background: ${AppTheme.colors.white};
    font-family: ${AppTheme.fonts.europa};
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
  font-size:16px;
}
`;
