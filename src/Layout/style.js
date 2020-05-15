import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  height: 100vh;
  background: ${(props) => props.theme.secondary};
`;

export const Wrapper = styled.main`
  padding: 1rem;
  margin-left: 300px;
`;
