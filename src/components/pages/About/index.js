import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Paragraph, Title } from '../../shared/typography';
import { User, Wrapper } from './styled';
const About = () => {
  const { language } = useLanguage();

  const [info, setInfo] = useState(null);

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
    </Wrapper>
  );
};

export default About;
