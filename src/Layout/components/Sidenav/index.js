import React from 'react';
import { Wrapper, Icon, List, ListItem, Username } from './style';
import { Link } from '../../../theme/globalStyle';
const anchors = [
  { label: 'Início', link: '#home', icon: 'fa fa-desktop' },
  { label: 'Sobre', link: '#about', icon: 'fa fa-address-card-o' },
  { label: 'Experiências', link: '#experience', icon: 'fa fa-map-signs' },
  { label: 'Projetos', link: '#projects', icon: 'fa fa-code-fork' },
  { label: 'Contato', link: '#contact', icon: 'fa fa-comments-o' },
];

const Sidenav = ({ username, sidenav }) => {
  return (
    <Wrapper sidenav={sidenav}>
      <Username data-end=".">{username}</Username>
      <List>
        {anchors.map((item, key) => (
          <Link key={key} href={item.link}>
            <ListItem>
              <Icon className={item.icon} /> {item.label}
            </ListItem>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidenav;
