import React, { useEffect, useState } from 'react';
import { Wrapper, Typography } from '../../theme/globalStyle';
import { Intro, Social, MouseWrapper, Icon, Image } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Home = () => {
  const skills = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [skill, setskill] = useState(skills[0]);
  const networks = [
    {
      icon: 'fa fa-linkedin-square fa-2x',
      link: 'https://linkedin.com/in/alissonmgsantos',
    },
    { icon: 'fa fa-github fa-2x', link: 'https://github.com/alissonmgsantos' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setskill(skills.filter((item) => item !== skill)[0]);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills, skill]);

  return (
    <Wrapper id="home">
      <Intro>
        <Image src={avatar} alt="user avatar" />
        <h1>Alisson Matos</h1>
        <Typography fontStyle="italic">{skill}</Typography>
        <Social>
          {networks.map((item, key) => (
            <a key={key} href={item.link}>
              <Icon className={item.icon} />
            </a>
          ))}
        </Social>
      </Intro>
      <MouseWrapper />
    </Wrapper>
  );
};

export default Home;
