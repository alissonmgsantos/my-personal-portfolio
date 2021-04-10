import Head from 'next/head';
import React from 'react';
import {
  CardServices,
  Container,
  ContainerServices,
  HomeBanner,
  Title,
} from '../components';
const Home = () => {
  return (
    <>
      <Head>
        <title>Alisson Matos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
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
        </ContainerServices>
      </Container>
    </>
  );
};

export default Home;
