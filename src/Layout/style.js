import styled from 'styled-components';

export const LayoutWrapper = styled.section((props) => ({
  height: '100vh',
  background: props.theme.secondary,
}));

export const Content = styled.main((props) => ({
  marginLeft: '18rem',
}));
