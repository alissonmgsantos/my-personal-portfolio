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
}));
export const Content = styled.div((props) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  flex: 1,
  margin: '1rem',
  padding: '1rem',
  borderRadius: '2rem',
}));
