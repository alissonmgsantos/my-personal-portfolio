import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Title,
  SubTitle,
  Paragraph,
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
import Axios from 'axios';

const Project = () => {
  const filters = ['Web', 'Mobile', 'FullStack'];
  const [search, setSearch] = useState('Web');
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    async function loadRepository() {
      await Axios.get(
        'https://api.github.com/users/alissonmgsantos/repos'
      ).then((response) => setRepository(response.data));
    }
    if (repository.length === 0) {
      loadRepository();
    }
  }, [repository]);

  const formatName = (name) => {
    name = name.split('_').join(' ');
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
        {repository &&
          repository.map((item, key) => {
            return (
              item.description &&
              item.description.includes(search) && (
                <Link
                  key={key}
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visualizar no Github"
                >
                  <PortfolioItem>
                    <PortfolioHeader
                      image={searchImage(search)}
                    ></PortfolioHeader>
                    <PortfolioItemContent>
                      <Paragraph fontSize="0.9rem">
                        {item.description.includes(search)}
                      </Paragraph>
                      <SubTitle>{formatName(item.name)}</SubTitle>
                    </PortfolioItemContent>
                  </PortfolioItem>
                </Link>
              )
            );
          })}
      </Portfolio>
    </Wrapper>
  );
};

export default Project;
