import Head from 'next/head';
import React from 'react';
import { About, Footer, Home, Portfolio, Resume } from '../components/pages';

const Index = () => {
  return (
    <>
      <Head>
        <title>Alisson Matos</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"></link>
      </Head>

      <>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </>
    </>
  );
};

export default Index;
