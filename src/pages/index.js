import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
