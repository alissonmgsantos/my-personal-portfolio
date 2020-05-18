import styled from 'styled-components';

export const ListFilter = styled.ul((props) => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  paddingTop: '2rem',
}));

export const ButtonFilter = styled.li((props) => ({
  color: props.theme.dark,
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: '700',
  padding: '1rem',
  textDecoration: 'none',
  cursor: 'pointer',

  '&.actived': {
    color: props.theme.primary,
  },
}));

export const Portfolio = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
}));

export const PortfolioItem = styled.article((props) => ({
  margin: '0.9rem 0.7rem',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  backgroundColor: '#fff',
  width: '11.5rem',
  position: 'relative',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: '0px 13px 10px -7px rgba(0, 0, 0,0.1)',

  ':hover': {
    boxShadow: '0px 30px 18px -8px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.1, 1.1)',
    opacity: 1,
  },
}));

export const PortfolioHeader = styled.article((props) => ({
  height: '9rem',
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  top: 0,
  width: '100%',
}));

export const PortfolioItemContent = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',

  i: {
    float: 'right',
  },
}));
