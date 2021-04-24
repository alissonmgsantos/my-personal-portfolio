import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  position: fixed;
  z-index: 9999;
  color: ${props => (props.scrollPosition > 30 ? '#333' : '#fff')};
  background: ${props => (props.scrollPosition > 30 ? '#fff' : 'transparent')};
  box-shadow: ${props =>
    props.scrollPosition > 30
      ? '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)'
      : 0};

  @media (max-width: 800px) {
    flex-direction: column;

    & > :nth-child(2) {
      margin: 0.5rem;
    }
  }
`;

export const Brand = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > :nth-child(odd) {
    margin: 0 0.5rem !important;
  }
`;

export const LinkText = styled.a`
  font-weight: 400;
`;

export const LayoutMain = styled.main`
  height: 100vh;
`;
