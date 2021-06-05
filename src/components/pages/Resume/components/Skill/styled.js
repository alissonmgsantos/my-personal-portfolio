import styled from 'styled-components';
import * as shared from '../../../../shared';

export const Card = styled(shared.Card)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  & > .title {
    grid-area: 1 / 1 / 2 / 3;
  }

  & > .soft-skills {
    grid-area: 2 / 1 / 3 / 2;
    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 5;
    }
  }
  & > .hard-skills {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
  & > .all-skills {
    grid-area: 3 / 1 / 4 / 3;
    @media (max-width: 425px) {
      flex-wrap: wrap;
    }
  }
`;
