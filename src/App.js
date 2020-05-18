import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

import { GlobalStyle, ThemeLight } from './theme/globalStyle.js';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyle />
      <Layout>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
