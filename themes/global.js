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
`;

export default GlobalStyles;
