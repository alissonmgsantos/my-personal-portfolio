import { Desktop, Globe, MobileAlt } from '@styled-icons/fa-solid';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Text } from '../../shared';
import { Card, Container, User, Wrapper } from './styled';

const About = () => {
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
    <Wrapper id="about">
      <Text size="2rem" weight={600}>
        <User width={24} />
        {info?.title}
      </Text>
      <Text spacing="0.15em" padding="3rem 0" align="justify">
        {info?.bio}
      </Text>

      <Container>
        {services[language].map((service, key) => (
          <Card key={key}>
            {service.icon}
            <Text weight={600} margin="1rem 0 0 0">
              {service.name}
            </Text>
            <Text>{service.description}</Text>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default About;
