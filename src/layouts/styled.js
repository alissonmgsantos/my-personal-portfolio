import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  position: fixed;
  z-index: 9999;
  color: #fff;

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
  cursor: pointer;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  & > :nth-child(2n) {
    margin: 0 0.5rem !important;
  }
`;

export const LinkText = styled.a`
  /* margin: 0.5rem; */
`;

export const LayoutMain = styled.main`
  height: 100vh;
`;
