import { Desktop, Globe, MobileAlt } from '@styled-icons/fa-solid';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Paragraph, Title } from '../../shared/typography';
import { Wrapper } from './styled';

const Service = () => {
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
        icon: <Desktop width={48} />,
      },
      { name: 'Sites', description: 'Responsivos', icon: <Globe width={48} /> },
    ],
    english: [
      {
        name: 'Applications',
        description: 'Incredible',
        icon: <MobileAlt width={32} />,
      },
      {
        name: 'Softwares',
        description: 'Scalable',
        icon: <Desktop width={48} />,
      },
      {
        name: 'Websites',
        description: 'Responsive',
        icon: <Globe width={48} />,
      },
    ],
  })[0];

  useEffect(async () => {
    const data = await getPostBySlug('about', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="service">
      <Title>Serviços</Title>

      <Paragraph>{info?.bio}</Paragraph>
    </Wrapper>
  );
};

export default Service;
