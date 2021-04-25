import * as icon from '@styled-icons/fa-brands';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  background: rgba(0, 0, 0, 0.7);
`;

export const Background = styled(Image)`
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  z-index: 1;
`;

export const Avatar = styled(Image)`
  border: 0.2rem solid #fff !important;
  border-radius: 100%;
`;

export const Username = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  opacity: 80%;
  margin-top: 1rem;
`;

export const Description = styled.p`
  text-align: center;
  height: 1.5rem;
  font-weight: 300;
  color: #fff;
  opacity: 80%;
  margin-top: 0.5rem;

  &:after {
    content: '|';
    opacity: 1;
    margin-left: 2px;
    display: inline-block;
    animation: ${keyframes`0%, 100% { opacity: 1; } 50% {opacity: 0} }`} 0.7s
      infinite;
  }
`;

// Social
export const SocialWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  color: #fff;
  opacity: 80%;
`;

export const Github = styled(icon.Github)`
  cursor: pointer;
  margin: 0 0.3rem;
`;

export const Linkedin = styled(icon.LinkedinIn)`
  cursor: pointer;
  margin: 0 0.3rem;
`;
