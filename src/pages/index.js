import Head from 'next/head';
import React from 'react';
import { Container, HomeBanner, WrapperServices } from '../components';
const Home = () => {
  return (
    <>
      <Head>
        <title>Alisson Matos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HomeBanner />
        <WrapperServices>a</WrapperServices>
      </Container>
    </>
  );
};

export default Home;
