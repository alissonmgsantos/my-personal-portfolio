import Head from 'next/head';
import React from 'react';
import {
  CardServices,
  ContainerServices,
  HomeBanner,
  Title,
  Wrapper,
} from '../components';
const Home = () => {
  return (
    <>
      <Head>
        <title>Alisson Matos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <HomeBanner />
        <ContainerServices>
          {[1, 2, 3].map(service => (
            <CardServices>
              <Title>Título</Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </CardServices>
          ))}
        </ContainerServices>
      </Wrapper>
    </>
  );
};

export default Home;
