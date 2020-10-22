import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import SEO from '../components/seo';
import Skills from '../components/Skills';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Experience />
    <Footer />
  </Layout>
);

export default IndexPage;
