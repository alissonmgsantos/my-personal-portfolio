import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
  background: #16161c;
`;

export const LayoutMain = styled.main`
  grid-area: 1 / 2 / 6 / 6;
  padding: 1rem;
`;

export const LayoutBackground = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  background-position: center;
  height: 500px;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1478148054759-b7f4779d7b35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80');
  background-repeat: no-repeat;

  &:before {
    content: '';

    background: rgba(30, 30, 40, 0.88);
    position: absolute;
    z-index: 9;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 80%;
  }

  /* &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 70%;
    background-image: linear-gradient(
      180deg,
      rgba(30, 30, 40, 0.9) 0%,
      rgba(30, 30, 40, 0.93) 70%,
      rgba(30, 30, 40, 0.99) 80%,
      #1e1e28 100%
    );
  } */
`;

export const LayoutBackgroundOverley = styled.div`
  position: relative;
  width: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(30, 30, 40, 0.93)),
    color-stop(70%, rgba(30, 30, 40, 0.96)),
    color-stop(80%, rgba(30, 30, 40, 0.99)),
    to(#1e1e28)
  );
  background-image: linear-gradient(
    180deg,
    rgba(30, 30, 40, 0.93) 0%,
    rgba(30, 30, 40, 0.96) 70%,
    rgba(30, 30, 40, 0.99) 80%,
    #1e1e28 100%
  );
`;
