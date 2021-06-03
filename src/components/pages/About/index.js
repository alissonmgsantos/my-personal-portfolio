import {
  Desktop,
  Globe,
  MapMarkedAlt,
  MobileAlt,
  UserAstronaut,
} from '@styled-icons/fa-solid';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Avatar, HeaderPage, Text } from '../../shared';
import { Card, CardInfo, Wrapper } from './styled';

const About = props => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);
  const services = useState({
    portuguese: [
      {
        name: 'Aplicativos',
        description: 'Incríveis',
        icon: <MobileAlt width={20} />,
      },
      {
        name: 'Programas',
        description: 'Escaláveis',
        icon: <Desktop width={30} />,
      },
      { name: 'Sites', description: 'Responsivos', icon: <Globe width={30} /> },
      {
        name: 'Freelance',
        description: 'Disponível',
        icon: <UserAstronaut width={30} />,
      },
    ],
    english: [
      {
        name: 'Applications',
        description: 'Incredibles',
        icon: <MobileAlt width={20} />,
      },
      {
        name: 'Softwares',
        description: 'Scalables',
        icon: <Desktop width={30} />,
      },
      {
        name: 'Websites',
        description: 'Responsives',
        icon: <Globe width={30} />,
      },
      {
        name: 'Freelance',
        description: 'Available',
        icon: <UserAstronaut width={30} />,
      },
    ],
  })[0];

  useEffect(async () => {
    const data = await getPostBySlug('about', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="about" style={{ paddingBottom: '2rem' }}>
      <HeaderPage>
        <Text size="2rem" weight={600} align="center">
          {info?.title}
        </Text>
        <span></span>
      </HeaderPage>
      <Card>
        <div className="image-profile">
          <Avatar
            alt="user image"
            objectFit="cover"
            src={'/images/background.jpeg' || '/'}
            width={200}
            height={200}
          />
        </div>
        <div className="about">
          <Text size="1rem" weight={600}>
            Nome
          </Text>
          <Text size="0.75rem" padding="0.2rem 0">
            <MapMarkedAlt width={20} style={{ margin: '0 0.5rem 0.3rem 0' }} />
            Localização
          </Text>
          <Text padding="1rem 0 0 0">{info?.bio}</Text>
        </div>

        <div className="info">
          {services[language].map((service, key) => (
            <CardInfo key={key}>
              {service.icon}
              <div>
                <Text weight={600}>{service.name}</Text>
                <Text size="0.9rem">{service.description}</Text>
              </div>
            </CardInfo>
          ))}
        </div>
      </Card>
    </Wrapper>
  );
};

export default About;
