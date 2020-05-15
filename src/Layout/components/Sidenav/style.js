import styled from 'styled-components';

export const Container = styled.aside`
  background: ${(props) => props.theme.secondary};
  width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 50px 40px 40px;
  float: left;
  border: solid 1px rgba(0, 0, 0, 0.05);
  position: fixed;

  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
`;

export const Username = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.dark};
  span {
    color: ${(props) => props.theme.primary};
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

export const ListItem = styled.li`
  display: flex;
  padding: 1.2rem 0rem;

  color: ${(props) => props.theme.dark};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  text-decoration: none;
  position: relative;

  i {
    font-size: 1.3rem;
    margin-right: 1.5rem;
    color: ${(props) => props.theme.primary};
  }
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
