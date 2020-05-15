import React from 'react';
import { Container, List, ListItem, Username } from './style';

const anchors = [
  { label: 'Início', link: '#home', icon: 'fa fa-desktop' },
  { label: 'Sobre', link: '#about', icon: 'fa fa-address-card-o' },
  { label: 'Experiências', link: '#experience', icon: 'fa fa-map-signs' },
  { label: 'Trabalhos', link: '#works', icon: 'fa fa-code-fork' },
  { label: 'Contato', link: '#contact', icon: 'fa fa-comments-o' },
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
