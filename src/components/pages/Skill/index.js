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
import { ProgressBar } from '../../../components';
import { useLanguage } from '../../../providers/language';
import { HeaderPage, Image, Text } from '../../shared';
import { Card, Wrapper } from './styled';

const Skill = () => {
  const { language } = useLanguage();

  const skills = (context => {
    return context.keys().map(item => item.replace('./', '/images/skills/'));
  })(require.context('../../../../public/images/skills', true, /\.svg$/));

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
        <div className="soft-skills">
          <ProgressBar title="Adaptabilidade" percentage="70%" />
          <ProgressBar title="Criatividade" percentage="80%" />
          <ProgressBar title="Empatia" percentage="75%" />
          <ProgressBar title="Liderança" percentage="40%" />
          <ProgressBar title="Trabalho em equipe" percentage="70%" />
        </div>

        <div className="hard-skills" align="center">
          {['javascript', 'nodejs', 'php', 'react', 'vuejs', 'angular'].map(
            (item, key) => (
              <Image
                key={key}
                alt={`${item}`}
                src={`/images/skills/${item}.svg`}
                width={150}
                height={150}
              />
            )
          )}
        </div>

        <div className="info">
          {skills.map((item, key) => (
            <Image
              key={key}
              alt={`${item}`}
              src={item}
              width={90}
              height={90}
              padding="1rem"
            />
          ))}
        </div>
      </Card>
    </Wrapper>
  );
};

export default Skill;
