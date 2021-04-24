import Head from 'next/head';
import React from 'react';
import { Container } from '../components';
import { Home } from '../components/pages';

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

      <Container>
        <Home />
        {/* <Portfolio />
        <HomeBanner />
        <ContainerServices>
          {[1, 2, 3].map(service => (
            <CardServices>
              <Title>Título</Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              fugiat officiis esse id libero modi consequuntur itaque hic
              laudantium facere, nihil quae asperiores dolore vitae quibusdam
              porro voluptates inventore quaerat.
            </CardServices>
          ))}
        </ContainerServices>*/}
      </Container>
    </>
  );
};

export default Index;
