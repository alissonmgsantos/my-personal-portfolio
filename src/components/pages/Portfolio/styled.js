import styled from 'styled-components';

export const Galery = styled.div`
  width: 80%;
  column-count: 3;
  column-gap: 10px;
`;

export const Photo = styled.img`
  border-radius: 0.3rem;
  width: 100%;
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;
`;
