import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
  padding: 5rem;
  background: #edf2f7;
`;
export const User = styled(icon.User)`
  margin-right: 1rem;
`;

export const Container = styled(shared.Container)`
  margin: 2rem 0;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 15rem;
  height: 13rem;
  border: 0.1rem dashed #ccc;

  &:hover {
    border: 0.1rem solid #ccc;
  }
`;
export const CardTitle = styled.h5`
  margin-top: 1rem;
  line-height: 1.4;
  font-weight: 600;
`;
export const CardDescription = styled.span`
  color: #777;
  font-weight: 300;
  line-height: 2;
  margin: 0;
`;
