import styled, { keyframes } from 'styled-components';

export const Intro = styled.div((props) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Social = styled.div((props) => ({
  display: 'flex',
  margin: '1rem',
  flexDirection: 'row',
}));

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
