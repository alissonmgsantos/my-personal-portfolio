import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

import { GlobalStyle, themeLight } from './theme/globalStyle.js';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Home from './pages/home';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
