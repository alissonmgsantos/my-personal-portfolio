import styled, { createGlobalStyle } from 'styled-components';

export const themeLight = {
  white: '#fff',
  primary: '#0073b0',
  secondary: '#e2e7ea',
  success: '#28a745',
  info: '#007bff',
  warning: '#ffc107',
  danger: '#ff4c60',
  dark: '#343a40',
};

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

export const Wrapper = styled.section((props) => ({
  display: 'flex',
  margin: '0 auto',
  height: '100vh',
  flexDirection: 'column',
}));

export const Typography = styled.div((props) => ({
  fontStyle: props.fontStyle || 'initial',
  color: props.color || props.theme.dark,
}));

export const Link = styled.a((props) => ({
  color: props.theme.dark,
  '&:hover': {
    color: props.theme.primary,
  },
}));
