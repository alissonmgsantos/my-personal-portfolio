import styled from 'styled-components';
import * as shared from '../../../../shared';

export const Card = styled(shared.Card)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardDescription = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  & > svg {
    width: 2rem;
    float: left;
    margin-right: 1rem;
  }
  :hover {
    opacity: 50%;
  }
`;
