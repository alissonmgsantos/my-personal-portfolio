import { Desktop, Globe, MobileAlt } from '@styled-icons/fa-solid';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Paragraph, Title } from '../../shared/typography';
import {
  Card,
  CardDescription,
  CardTitle,
  Container,
  User,
  Wrapper,
} from './styled';

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
      <Title>
        <User width={24} />
        {info?.title}
      </Title>
      <Paragraph>{info?.bio}</Paragraph>

      <Container>
        {services[language].map(service => (
          <Card>
            {service.icon}
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default About;
