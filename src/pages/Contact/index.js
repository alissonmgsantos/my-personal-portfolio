import React from 'react';
import {
  Wrapper,
  Paragraph,
  Avatar,
  Link,
  Icon,
  Title,
} from '../../theme/globalStyle';
import { Wrapperx, Intro, Social } from './style';
const avatar =
  'https://votoconscientejundiai.com.br/wp-content/uploads/2015/02/depositphotos_42239995-Vector-Avatar-Profile-Account-Icon.jpg';
const Contact = () => {
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

  return (
    <Wrapper id="contact">
      <Intro>
        <Avatar src={avatar} alt="user avatar" width="100" height="100" />
        <Title>Contato</Title>
        <Paragraph fontStyle="italic">Vamos conversar sobre tudo!</Paragraph>
        <Social>
          {networks.map((item, key) => (
            <Link key={key} href={item.link} title={item.title}>
              <Icon className={item.icon} />
            </Link>
          ))}
        </Social>
      </Intro>
    </Wrapper>
  );
};

export default Contact;
