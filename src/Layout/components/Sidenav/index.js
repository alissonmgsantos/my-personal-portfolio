import React from 'react';
import { Container, List, ListItem, Username } from './style';

const anchors = [
  { label: 'Início', link: '#home', icon: 'icon-home' },
  { label: 'Sobre', link: '#about', icon: 'icon-user-following' },
  { label: 'Experiências', link: '#experience', icon: 'icon-directions' },
  { label: 'Trabalhos', link: '#works', icon: 'icon-briefcase' },
  { label: 'Contato', link: '#contact', icon: 'icon-bubbles' },
];

const Sidenav = ({ username }) => {
  return (
    <Container>
      <Username>
        {username}
        <span>.</span>
      </Username>
      <List>
        {anchors.map((item, key) => (
          <ListItem key={key}>
            <i className={item.icon} /> {item.label}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Sidenav;
