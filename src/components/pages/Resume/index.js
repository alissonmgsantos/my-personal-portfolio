import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { HeaderPage, Text } from '../../shared';
import { Experience, Skill } from './components';
import { Wrapper } from './styled';

const Resume = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const data = await getPostBySlug('resume', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="resume">
      <HeaderPage>
        <Text size="2rem" weight={600} align="center">
          {info?.title}
        </Text>
        <span></span>
      </HeaderPage>

      <Skill title={info?.title_skill} soft_skills={info?.soft_skills} />
      <Experience
        education={{
          title: info?.title_education,
          datasource: info?.education || [],
        }}
        experience={{
          title: info?.title_experience,
          datasource: info?.experience || [],
        }}
      />
    </Wrapper>
  );
};

export default Resume;
