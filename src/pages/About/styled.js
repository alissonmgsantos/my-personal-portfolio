import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../components/shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
export const Container = styled(shared.Container)`
  flex-wrap: wrap;
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
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  & > .image-profile {
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 2 / 2;
  }
  & > .about {
    grid-area: 1 / 2 / 2 / 5;
  }
  & > .info {
    grid-area: 2 / 1 / 3 / 5;
    display: flex;
    align-items: start;
    justify-content: space-between;
    height: auto;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  & > svg {
    float: left;
    margin-right: 15px;
  }
`;
