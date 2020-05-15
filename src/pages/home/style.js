import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Intro = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
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

  button {
    margin-top: 1rem;
    border: 0;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 700;
    overflow: hidden;
    line-height: 1;
    padding: 12px 32px;

    color: #fff;
    background: ${(props) => props.theme.primary};
    display: inline-block;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background: ${(props) => props.theme.dark};
  }
`;
