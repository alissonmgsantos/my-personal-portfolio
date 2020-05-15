import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

import { GlobalStyle, themeLight } from './theme/globalStyle.js';
import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
