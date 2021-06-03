import {
  BookReader,
  Film,
  Gamepad,
  History,
  Music,
  Route,
  Running,
  UmbrellaBeach,
} from '@styled-icons/fa-solid';
import React, { useState } from 'react';
import { HeaderPage, Text } from '../../components/shared';
import { useLanguage } from '../../providers/language';
import { Card, CardInfo, Wrapper } from './styled';

const Interest = () => {
  const { language } = useLanguage();

  const info = useState({
    portuguese: {
      title: 'Interesses',
      datasource: [
        {
          description: 'Praia',
          icon: <UmbrellaBeach width={30} />,
        },
        {
          description: 'Viagem',
          icon: <Route width={30} />,
        },

        {
          description: 'Esportes',
          icon: <Running width={30} />,
        },
        {
          description: 'História',
          icon: <History width={30} />,
        },

        {
          description: 'Livros',
          icon: <BookReader width={30} />,
        },

        {
          description: 'Música',
          icon: <Music width={30} />,
        },

        {
          description: 'Filmes',
          icon: <Film width={30} />,
        },
        {
          description: 'Jogos',
          icon: <Gamepad width={30} />,
        },
      ],
    },
    english: {
      title: 'Interests',
      datasource: [
        {
          description: 'Beach',
          icon: <UmbrellaBeach width={30} />,
        },
        {
          description: 'Travel',
          icon: <Route width={30} />,
        },

        {
          description: 'Sports',
          icon: <Running width={30} />,
        },
        {
          description: 'History',
          icon: <History width={30} />,
        },

        {
          description: 'Books',
          icon: <BookReader width={30} />,
        },

        {
          description: 'Music',
          icon: <Music width={30} />,
        },

        {
          description: 'Movies',
          icon: <Film width={30} />,
        },
        {
          description: 'Games',
          icon: <Gamepad width={30} />,
        },
      ],
    },
  })[0];

  return (
    <Wrapper id="about" style={{ paddingTop: 0 }}>
      <HeaderPage>
        <Text size="2rem" weight={600} align="center">
          {info[language].title}
        </Text>
        <span></span>
      </HeaderPage>
      <Card>
        {info[language].datasource.map((service, key) => (
          <CardInfo key={key}>
            {service.icon}
            <Text>{service.description}</Text>
          </CardInfo>
        ))}
      </Card>
    </Wrapper>
  );
};

export default Interest;
