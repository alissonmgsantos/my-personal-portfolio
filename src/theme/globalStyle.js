import styled, { createGlobalStyle } from 'styled-components';

/**===========================================================================
 * THEMES
 ===========================================================================*/
export const ThemeLight = {
  white: '#fff',
  primary: '#0073b0',
  secondary: '#eee',
  success: '#28a745',
  info: '#007bff',
  warning: '#ffc107',
  danger: '#ff4c60',
  dark: '#353353',
  gray: '#969798',
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
  padding: '1rem',
  minHeight: '100vh',
  paddingTop: '2rem',
  flexDirection: props.direction || 'column',
  alignContent: props.alignContent || 'center',
  justifyContent: props.justifyContent || 'center',
}));

/**===========================================================================
 * TYPOGRAPHY
 ===========================================================================*/
export const Title = styled.h1((props) => ({
  fontSize: '2.5rem',
  color: props.color || props.theme.dark,
  paddingTop: '0.5rem',
}));

export const SubTitle = styled.h1((props) => ({
  fontSize: props.fontSize || '1.5rem',
  color: props.color || props.theme.dark,
  width: '100%',
  paddingTop: '0.5rem',
}));

export const Paragraph = styled.div((props) => ({
  fontStyle: props.fontStyle || 'initial',
  color: props.color || props.theme.gray,
  fontSize: props.fontSize || 'initial',
  paddingTop: '0.5rem',
}));

/**===========================================================================
 * AVATAR, ICONS AND LINK
 ===========================================================================*/
export const Avatar = styled.img((props) => ({
  borderRadius: '50%',
}));

export const Image = styled.img((props) => ({
  // padding: '1rem',
  margin: '0 0.9rem 0.9rem',
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

/**===========================================================================
 * CARD
 ===========================================================================*/
export const Card = styled.div((props) => ({
  padding: '1rem',
}));

export const CardHeader = styled.div((props) => ({
  display: 'flex',
  color: props.theme.dark,
  flexDirection: props.flexDirection || 'row',
}));

export const CardContent = styled.div((props) => ({
  display: 'flex',
  padding: '1rem 0 0 0',
  flexDirection: props.flexDirection || 'row',
}));
