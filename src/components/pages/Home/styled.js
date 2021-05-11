import * as icon from '@styled-icons/fa-brands';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Background = styled(Image)`
  z-index: -1;
`;

export const Container = styled(shared.Container)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  & > p {
    margin-top: 0.5rem;
    color: #fff;
    opacity: 80%;

    &:nth-child(3) {
      &:after {
        content: '|';
        opacity: 1;
        margin-left: 2px;
        display: inline-block;
        animation: ${keyframes`0%, 100% { opacity: 1; } 50% {opacity: 0} }`}
          0.7s infinite;
      }
    }
  }
`;

export const Avatar = styled(Image)`
  border: 0.2rem solid #fff !important;
  border-radius: 100%;
  margin-bottom: 2rem;
`;

// Social
export const SocialWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  color: #fff;
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
