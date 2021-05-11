import * as icon from '@styled-icons/fa-brands';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: auto;
  padding: 0 0 1rem 0;
`;

// Social
export const SocialWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Github = styled(icon.Github)`
  cursor: pointer;
  margin: 0 0.3rem;
  opacity: 80%;
  &:hover {
    opacity: 1;
  }
`;

export const Linkedin = styled(icon.LinkedinIn)`
  cursor: pointer;
  margin: 0 0.3rem;
  opacity: 80%;
  &:hover {
    opacity: 1;
  }
`;
