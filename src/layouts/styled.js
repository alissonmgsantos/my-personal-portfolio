import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
  background: #16161c;
`;

export const LayoutMain = styled.main`
  grid-area: 1 / 2 / 6 / 6;
  padding: 1rem;
`;
