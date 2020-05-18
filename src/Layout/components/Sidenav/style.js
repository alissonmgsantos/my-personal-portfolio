import styled from 'styled-components';
import { Title } from '../../../theme/globalStyle';

export const Wrapper = styled.aside((props) => ({
  background: props.theme.secondary,
  width: '18rem',
  height: '100vh',
  paddingLeft: '2rem',
  borderRight: 'solid 0.15rem rgba(0, 0, 0, 0.09)',
  position: 'fixed',
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  zIndex: 1,
}));

export const Username = styled(Title)((props) => ({
  ':after': {
    content: 'attr(data-end)',
    color: props.theme.primary,
  },
}));

export const List = styled.ul((props) => ({
  marginTop: '5rem',
  listStyle: 'none',
}));

export const ListItem = styled.li((props) => ({
  display: 'flex',
  paddingBottom: '2rem',
  fontSize: '1rem',
  fontWeight: '700',
  width: '100%',
  textDecoration: 'none',
  position: 'relative',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const Icon = styled.i((props) => ({
  marginRight: '1rem',
  color: props.theme.primary,
}));
