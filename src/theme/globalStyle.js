import styled, { createGlobalStyle } from 'styled-components';

/**===========================================================================
 * THEMES
 ===========================================================================*/
export const ThemeLight = {
  white: '#fff',
  primary: '#0073b0',
  secondary: '#e2e7ea',
  success: '#28a745',
  info: '#007bff',
  warning: '#ffc107',
  danger: '#ff4c60',
  dark: '#353353',
};

/**===========================================================================
 * GLOBAL
 ===========================================================================*/
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

/**===========================================================================
 * WRAPPER
 ===========================================================================*/
export const Wrapper = styled.section((props) => ({
  display: 'flex',
  margin: '0 auto',
  height: '100vh',
  flexDirection: 'column',
}));

/**===========================================================================
 * TYPOGRAPHY
 ===========================================================================*/
export const Title = styled.h1((props) => ({
  fontSize: '2.5rem',
  color: props.color || props.theme.dark,
}));

export const SubTitle = styled.h1((props) => ({
  fontSize: '2.5rem',
  color: props.color || props.theme.dark,
}));

export const Paragraph = styled.div((props) => ({
  fontStyle: props.fontStyle || 'initial',
  color: props.color || props.theme.dark,
}));

/**===========================================================================
 * AVATAR, ICONS AND LINK
 ===========================================================================*/
export const Avatar = styled.img((props) => ({
  margin: '1rem',
  borderRadius: '50%',
}));

export const Icon = styled.i((props) => ({
  padding: '1rem',
  color: props.color || props.theme.dark,
  cursor: 'pointer',
}));

export const Link = styled.a((props) => ({
  color: props.theme.dark,
  '&:hover': {
    color: props.theme.primary,
  },
}));
