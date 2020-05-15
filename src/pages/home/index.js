import React, { useEffect, useState } from 'react';
import { Wrapper, Intro, Social, MouseWrapper, Mouse, Scroll } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Home = () => {
  const jobs = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [job, setJob] = useState(jobs[0]);
  useEffect(() => {
    setInterval(() => {
      setJob(jobs[Math.floor(Math.random() * jobs.length)]);
    }, 5000);
  }, [job, jobs]);

  return (
    <Wrapper>
      <Intro>
        <img src={avatar} alt="user avatar" />
        <h1>Alisson Matos</h1>
        <span>{job}</span>
        <Social>
          <a href="https://linkedin.com/in/alissonmgsantos">
            <i className="fa fa-linkedin-square fa-2x" />
          </a>
          <a href="https://github.com/alissonmgsantos">
            <i className="fa fa-github fa-2x" />
          </a>
        </Social>
      </Intro>
      <MouseWrapper>
        <Mouse>
          <Scroll className="sroll"></Scroll>
        </Mouse>
        <small>Scroll down</small>
      </MouseWrapper>
    </Wrapper>
  );
};

export default Home;
