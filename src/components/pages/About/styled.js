import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const User = styled(icon.User)`
  margin-right: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 15rem;
  height: 13rem;
  margin: 1rem;
  border: 0.1rem dashed #ccc;
  cursor: pointer;

  &:hover {
    border: 0.15rem solid #ccc;
  }
`;
