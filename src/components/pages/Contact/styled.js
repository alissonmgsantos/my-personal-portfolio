import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  align-items: center;
  flex-direction: column;
`;

// Social
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SocialItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 15rem;
  height: 15rem;
  border: 0.1rem dashed;
  margin: 1rem;
  opacity: 90%;
  &:hover {
    border: 0.1rem solid;
    opacity: 1;
  }
`;
