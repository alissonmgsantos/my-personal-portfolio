import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  SubTitle,
  Paragraph,
  Icon,
  Link,
} from '../../theme/globalStyle';
import {
  Portfolio,
  PortfolioItem,
  PortfolioItemContent,
  PortfolioHeader,
  ButtonFilter,
  ListFilter,
} from './style';

import webImage from '../../assets/images/web.jpeg';
import mobileImage from '../../assets/images/mobile.jpeg';
import fullstackImage from '../../assets/images/fullstack.jpeg';

const Project = () => {
  const filters = ['Web', 'Mobile', 'FullStack'];
  const [search, setSearch] = useState('Web');

  const repo = [
    {
      id: 1,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjQxNjk0MDI=',
      name: 'my-personal-portfolio',
      full_name: 'alissonmgsantos/my-personal-portfolio',
      html_url: 'https://github.com/alissonmgsantos/my-personal-portfolio',
      description:
        '(Web) Repository for my personal portfolio using react, styled-components and creativity.',
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'my-mobile',
      full_name: 'alissonmgsantos/my-personal-portfolio',
      html_url: 'https://github.com/alissonmgsantos/my-personal-portfolio',
      description:
        '(Mobile) Repository for my personal portfolio using react, styled-components and creativity.',
      language: 'React Native',
    },
    {
      id: 3,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjQxNjk0MDI=',
      name: 'my-FullStack',
      full_name: 'alissonmgsantos/my-personal-portfolio',
      html_url: 'https://github.com/alissonmgsantos/my-personal-portfolio',
      description:
        '(FullStack) Repository for my personal portfolio using react, styled-components and creativity.',
      language: 'JavaScript',
    },
  ];

  const formatName = (name) => {
    name = name.split('-').join(' ');
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  };

  const searchImage = (item) => {
    switch (item) {
      case 'Web':
        return webImage;
      case 'Mobile':
        return mobileImage;
      case 'FullStack':
        return fullstackImage;
      default:
        return;
    }
  };

  return (
    <Wrapper
      id="projects"
      alignContent="flex-start"
      justifyContent="flex-start"
    >
      <Title>Projetos</Title>

      <ListFilter>
        {filters.map((item, key) => (
          <ButtonFilter
            key={key}
            onClick={() => setSearch(item)}
            className={item === search && 'actived'}
          >
            {item}
          </ButtonFilter>
        ))}
      </ListFilter>
      <Portfolio>
        {repo.map((item, key) => {
          return (
            item.description.includes(search) && (
              <PortfolioItem key={key}>
                <PortfolioHeader image={searchImage(search)}></PortfolioHeader>
                <PortfolioItemContent>
                  <Paragraph fontSize="0.9rem">{item.language}</Paragraph>
                  <SubTitle>{formatName(item.name)}</SubTitle>
                </PortfolioItemContent>
              </PortfolioItem>
            )
          );
        })}
      </Portfolio>
    </Wrapper>
  );
};

export default Project;
