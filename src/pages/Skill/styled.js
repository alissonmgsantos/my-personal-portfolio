import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../components/shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const User = styled(icon.User)`
  margin-right: 1rem;
`;

export const Card = styled(shared.Card)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 2rem;

  & > .soft-skills {
    grid-area: 1 / 1 / 2 / 3;
    @media (max-width: 425px) {
      grid-area: 1 / 1 / 1 / 5;
    }
  }
  & > .hard-skills {
    grid-area: 1 / 3 / 2 / 5;
    justify-content: center;
    align-items: center;
    img {
      padding: 1rem !important;
    }
    @media (max-width: 425px) {
      grid-area: 1 / 1 / 1 / 5;
    }
  }
  & > .info {
    grid-area: 2 / 1 / 2 / 5;

    img {
      padding: 1rem !important;
    }

    @media (max-width: 425px) {
      flex-wrap: wrap;
    }
  }
`;
