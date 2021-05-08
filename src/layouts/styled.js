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
  padding: 0.5rem 3rem;
  position: fixed;
  z-index: 9999;
  color: ${({ theme, scrollPosition }) =>
    scrollPosition > 0.02285467874083657 ? theme.color : '#fff'};
  background: ${({ theme, scrollPosition }) =>
    scrollPosition > 0.02285467874083657 ? theme.background : 'transparent'};
  box-shadow: ${props =>
    props.scrollPosition > 30 ? '0 3px 8px 0 rgb(15 15 20 / 20%)' : 0};

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
    & > :nth-child(2) {
      margin: 0.5rem 1rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  text-transform: uppercase;
  & > :nth-child(odd) {
    margin: 0 1rem !important;
  }
`;

export const LayoutMain = styled.main`
  height: 100vh;
`;

export const FloatButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.toggleTheme};
  color: ${({ theme }) => theme.toggleThemeIcon};
  border: 0.15rem solid #333;
  border-radius: 100%;
  position: fixed;
  float: bottom;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 100000000;
  cursor: pointer;
  opacity: 80%;
  &:hover {
    opacity: 100%;
  }
`;
