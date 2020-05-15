import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        font-family: "Rubik", sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`;

export const themeLight = {
  primary: '#0073b0',
  danger: '#ff4c60',
  dark: '#353353',
  secondary: '#f9f9ff',
};
