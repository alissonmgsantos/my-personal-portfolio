import { Building } from '@styled-icons/fa-regular';
import { ExternalLinkAlt, UserGraduate } from '@styled-icons/fa-solid';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { ButtonGroup, Text } from '../../shared';
import { Card, Container, FolderOpen, Wrapper } from './styled';
const Experience = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);
  const [selected, setSelected] = useState('work');

  useEffect(async () => {
    const data = await getPostBySlug('experience', language);
    setInfo(prevState => data);
  }, [language]);
  console.log(info);

  return (
    <Wrapper id="experience">
      <Text size="2rem" weight={600} margin="0 0 4rem 0">
        <FolderOpen width={32} />
        {info?.title}
      </Text>

      <ButtonGroup>
        <Text
          weight={600}
          className={selected == 'work' && 'actived'}
          onClick={() => setSelected(prevState => 'work')}>
          {info?.title_work}
        </Text>
        <Text
          weight={600}
          className={selected == 'academic' && 'actived'}
          onClick={() => setSelected(prevState => 'academic')}>
          {info?.title_academic}
        </Text>
      </ButtonGroup>

      <Container>
        {selected == 'work' &&
          info?.work.map((experience, key) => (
            <Card key={key}>
              <Building width={64} />
              <Text
                weight={500}
                size="0.9rem"
                align="center"
                margin="2rem 0 0 0 ">
                {experience.company}
              </Text>
              <Text weight={600} size="1rem" align="center">
                {experience.role}
              </Text>
              <Text size="0.8rem" align="center" margin="0 0 1rem 0">
                {experience.period}
              </Text>
              <Link href={experience.url || '/'}>
                <ExternalLinkAlt width={16} />
              </Link>
            </Card>
          ))}
        {selected == 'academic' &&
          info?.academic.map((experience, key) => (
            <Card key={key}>
              <UserGraduate width={64} />
              <Text
                weight={500}
                size="0.9rem"
                align="center"
                margin="2rem 0 0 0 ">
                {experience.company}
              </Text>
              <Text weight={600} size="1rem" align="center">
                {experience.role}
              </Text>
              <Text size="0.8rem" align="center" margin="0 0 1rem 0">
                {experience.period}
              </Text>
              <Link href={experience.url || '/'}>
                <ExternalLinkAlt width={16} />
              </Link>
            </Card>
          ))}
      </Container>
    </Wrapper>
  );
};

export default Experience;
