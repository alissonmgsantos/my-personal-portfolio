import styled, { keyframes } from 'styled-components';

export const Intro = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.dark};

  h1 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    font-style: italic;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

export const Social = styled.div`
  display: flex;
  margin: 1.5rem 0;
  flex-direction: row;
`;

export const Icon = styled.i`
  padding: 0 0.5rem;
  color: ${(props) => props.theme.dark};
  cursor: pointer;
  &.fa-linkedin-square {
    color: ${(props) => props.theme.primary};
  }
`;

export const MouseWrapper = styled.div`
  border: solid 0.1rem ${(props) => props.theme.dark};
  border-radius: 1rem;
  display: block;
  margin: auto auto 3rem auto;
  height: 2rem;
  position: relative;
  width: 1.3rem;

  &::before {
    content: '';
    background: ${(props) => props.theme.dark};
    border-radius: 100%;
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.2rem;
    width: 0.2rem;
    animation: ${keyframes`
      0% {top: 29%;}
      50% { top: 50%; }
      100% { top: 29%; }
     `} 1s linear infinite;
  }

  &::after {
    content: 'Scroll Down';
    color: ${(props) => props.theme.dark};
    font-size: 0.5rem;
    top: 2.3rem;
    left: -0.1rem;
    position: absolute;
  }
`;
