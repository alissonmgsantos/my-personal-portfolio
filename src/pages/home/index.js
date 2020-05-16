import React, { useEffect, useState } from 'react';
import { Wrapper, Intro, Social, MouseWrapper, Mouse, Scroll } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Home = () => {
  const skills = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [skill, setskill] = useState(skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setskill(skills.filter((item) => item !== skill)[0]);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills, skill]);

  return (
    <Wrapper>
      <Intro>
        <img src={avatar} alt="user avatar" />
        <h1>Alisson Matos</h1>
        <span>{skill}</span>
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
