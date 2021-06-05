import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  vertical-align: baseline;
  font-family: 'Poppins', sans-serif;
  font-size: 100%;
}

html,
body, #__next {
  min-height: 100%;

}

body {
  overflow: hidden;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  margin: 0 auto;
  max-width: 90rem;
  @media (min-width: 90rem) {
      box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    }
}

ol, ul {
	list-style: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.color};

}

.actived {
  &:before{
    content: '•';
    font-weight: bold;
    padding-right: 0.5rem;
    color: ${({ theme }) => theme.color};
  }
}

.cursor-pointer {
  cursor: pointer;
}
`;

export default GlobalStyles;
