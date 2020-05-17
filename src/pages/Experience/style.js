import styled from 'styled-components';

export const List = styled.div((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  paddingTop: '2rem',
}));

export const ListItem = styled.div((props) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  flex: 1,
  margin: '1rem',
  padding: '1rem',
  borderRadius: '2rem',
  background: props.theme.white,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
}));

export const Timeline = styled.div((props) => ({
  width: '100%',
  paddingLeft: '1.5rem',
  position: 'relative',
}));

export const LineAcademic = styled.div`
  position: absolute;
  top: 3rem;
  left: 0.5rem;
  height: 70%;
  border: solid 0.1rem ${(props) => props.theme.primary};

  &::before {
    content: '\f19d';
    font-family: 'FontAwesome';
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    top: -2.5rem;
    left: -1rem;
    position: absolute;
    background: ${(props) => props.theme.white};
  }
`;

export const LineWork = styled.div`
  position: absolute;
  top: 3rem;
  left: 0.5rem;
  height: 70%;
  border: solid 0.1rem ${(props) => props.theme.primary};

  &::before {
    content: '\f0b1';
    font-family: 'FontAwesome';
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    top: -2.5rem;
    left: -0.7rem;
    position: absolute;
    background: ${(props) => props.theme.white};
  }
`;
