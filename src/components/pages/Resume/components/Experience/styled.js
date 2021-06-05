import styled from 'styled-components';
import * as shared from '../../../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const Container = styled(shared.Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  & > .experience {
    grid-area: 1 / 1 / 2 / 2;
    margin-top: 0;
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }
  & > .education {
    margin-top: 0;
    grid-area: 1 / 2 / 2 / 3;
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 1 / 2;
    }
  }
`;

export const CardDescription = styled.div`
  border-left: 0.1rem dashed;
  padding-left: 1rem;
`;
