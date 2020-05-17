import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Paragraph,
  Avatar,
  Link,
  Icon,
  Title,
} from '../../theme/globalStyle';
import { Intro, Social, MouseWrapper } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Home = () => {
  const skills = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [skill, setskill] = useState(skills[0]);
  const networks = [
    {
      title: 'LinkedIn',
      icon: 'fa fa-linkedin fa-2x',
      link: 'https://linkedin.com/in/alissonmgsantos',
    },
    {
      title: 'GitHub',
      icon: 'fa fa-github fa-2x',
      link: 'https://github.com/alissonmgsantos',
    },
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
        <Avatar src={avatar} alt="user avatar" width="100" height="100" />
        <Title>Alisson Matos</Title>
        <Paragraph fontStyle="italic">{skill}</Paragraph>
        <Social>
          {networks.map((item, key) => (
            <Link key={key} href={item.link} title={item.title}>
              <Icon className={item.icon} />
            </Link>
          ))}
        </Social>
      </Intro>
      <MouseWrapper />
    </Wrapper>
  );
};

export default Home;
