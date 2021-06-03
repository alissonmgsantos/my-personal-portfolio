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
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const CardInfo = styled.div`
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
