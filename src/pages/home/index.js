import React, { useEffect, useState } from 'react';
import { Wrapper, Intro } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Home = () => {
  const jobs = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [job, setJob] = useState(jobs[0]);
  useEffect(() => {
    const time = 5000;
    setInterval(() => {
      setJob(jobs[Math.floor(Math.random() * 2)]);
    }, time);
  }, [job, jobs]);

  return (
    <Wrapper>
      <Intro>
        <img src={avatar} alt="user avatar" />
        <h1>John Doe</h1>
        <span>{job}</span>
        <button>Contato</button>
      </Intro>
    </Wrapper>
  );
};

export default Home;
