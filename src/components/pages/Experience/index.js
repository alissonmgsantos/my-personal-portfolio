import { Desktop, Globe, MobileAlt } from '@styled-icons/fa-solid';
import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Text } from '../../shared';
import {
  Container,
  ExperienceContainer,
  ExperienceItem,
  ExperienceLeftBorder,
  FolderOpen,
  UserGraduate,
  Wrapper,
} from './styled';
const Experience = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);
  const services = useState({
    portuguese: [
      {
        name: 'Aplicativos',
        description: 'Incríveis',
        icon: <MobileAlt width={32} />,
      },
      {
        name: 'Programas',
        description: 'Escaláveis',
        icon: <Desktop width={55} />,
      },
      { name: 'Sites', description: 'Responsivos', icon: <Globe width={48} /> },
    ],
    english: [
      {
        name: 'Applications',
        description: 'Incredibles',
        icon: <MobileAlt width={32} />,
      },
      {
        name: 'Softwares',
        description: 'Scalables',
        icon: <Desktop width={55} />,
      },
      {
        name: 'Websites',
        description: 'Responsives',
        icon: <Globe width={48} />,
      },
    ],
  })[0];

  useEffect(async () => {
    const data = await getPostBySlug('about', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="experience">
      <Text size="2rem" weight={600}>
        <FolderOpen width={32} />
        {info?.title}
      </Text>
      <Container>
        <ExperienceContainer>
          <Text size="1rem" weight={600}>
            <UserGraduate width={32} />
            aqui
          </Text>
          <PerfectScrollbar>
            {[1, 2, 3, 4, 5].map((item, key) => (
              <ExperienceLeftBorder>
                <ExperienceItem key={key}>
                  <Text size="1rem" weight={600}>
                    aqui
                  </Text>
                  <Text>Data</Text>
                  <Text padding="0 0 1.5rem">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia doloribus repellendus maxime, accusamus quae debitis
                    nesciunt maiores deleniti mollitia vel ipsa quasi omnis sint
                    nisi et! Ad quo officia consectetur!
                  </Text>
                </ExperienceItem>
              </ExperienceLeftBorder>
            ))}
          </PerfectScrollbar>
        </ExperienceContainer>

        <ExperienceContainer>
          <Text size="1rem" weight={600}>
            <UserGraduate width={32} />
            aqui
          </Text>
          <PerfectScrollbar>
            {[1, 2, 3, 4, 5].map((item, key) => (
              <ExperienceLeftBorder>
                <ExperienceItem key={key}>
                  <Text size="1rem" weight={600}>
                    aqui
                  </Text>
                  <Text margin="1rem 0">Data</Text>
                  <Text padding="0 0 1.5rem">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </Text>
                </ExperienceItem>
              </ExperienceLeftBorder>
            ))}
          </PerfectScrollbar>
        </ExperienceContainer>
      </Container>
    </Wrapper>
  );
};

export default Experience;
