import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';
import Skills from '../components/Skills';
import Layout from '../Layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Skills />
    <Experience />
    <Portfolio />
    <Footer />
  </Layout>
);

export default IndexPage;
