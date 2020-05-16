import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Intro = styled.div`
  display: flex;
  margin: auto;
  width: 300px;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.dark};

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    font-style: italic;
  }
`;

export const Social = styled.div`
  display: flex;
  margin: 1.5rem 0;
  flex-direction: row;

  i {
    padding: 0 0.5rem;
    font-size: 1.6rem;
    cursor: pointer;
    &.fa-linkedin-square {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const MouseWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  small {
    padding: 0.5rem;
    font-size: 0.6rem;
    font-style: italic;
    color: ${(props) => props.theme.dark};
  }
`;

const MouseAnimation = keyframes`
 0% {
      top: 29%;
    }
    50% {
      top: 50%;
    }
    100% {
      top: 29%;
    }
`;

export const Mouse = styled.div`
  border: solid 2px ${(props) => props.theme.dark};
  border-radius: 16px;
  display: block;
  margin: auto;
  margin-top: 10px;
  height: 26px;
  position: relative;
  width: 20px;
`;
export const Scroll = styled.div`
  background: ${(props) => props.theme.dark};
  border-radius: 100%;
  display: block;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: 4px;
  animation: ${MouseAnimation} 1s linear infinite;
`;
