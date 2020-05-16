import styled from 'styled-components';

export const LayoutWrapper = styled.section((props) => ({
  height: '100vh',
  background: props.theme.secondary,
}));

export const Wrapper = styled.main`
  margin-left: 300px;
`;
