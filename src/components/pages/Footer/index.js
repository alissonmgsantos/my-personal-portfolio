import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Text } from '../../shared';
import { Github, Linkedin, SocialWrapper, Wrapper } from './styled';

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date();
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const data = await getPostBySlug('profile', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper>
      <SocialWrapper>
        <Link href={info?.linkedin || '/'}>
          <Linkedin width={30} height={30} />
        </Link>
        <Link href={info?.github || '/'}>
          <Github width={30} height={30} />
        </Link>
      </SocialWrapper>
      <Text>
        {language == 'portuguese' ? 'Permaneça conectado' : 'Stay Connected'}
      </Text>
      <Text size="0.9rem">{year.getFullYear()}</Text>
    </Wrapper>
  );
};

export default Footer;
