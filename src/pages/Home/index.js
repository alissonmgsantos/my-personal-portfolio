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
import Axios from 'axios';
const Home = () => {
  const skills = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End'];
  const [skill, setskill] = useState(skills[0]);
  const [user, setUser] = useState([]);

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
    {
      title: 'E-mail',
      icon: 'fa fa-envelope-o fa-2x',
      link: 'mailto:alissonmgsantos@gmail.com',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setskill(skills.filter((item) => item !== skill)[0]);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills, skill]);

  useEffect(() => {
    async function loadUser() {
      await Axios.get(
        'https://api.github.com/users/alissonmgsantos'
      ).then((response) => setUser(response.data));
    }
    if (user.length === 0) {
      loadUser();
    }
  }, [user]);

  return (
    <Wrapper id="home">
      <Intro>
        <Avatar
          src={user && user.avatar_url}
          alt="user avatar"
          width="100"
          height="100"
        />
        <Title>{user.name}</Title>
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
