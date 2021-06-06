import { Github, LinkedinIn } from '@styled-icons/fa-brands';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { HeaderPage, Text } from '../../shared';
import { SocialItem, SocialWrapper, Wrapper } from './styled';

const Contact = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);

  useEffect(async () => {
    const data = await getPostBySlug('profile', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="contact">
      <HeaderPage>
        <Text size="2rem" weight={600} align="center">
          {language == 'portuguese' ? 'Contato' : 'Contact'}
        </Text>
        <span></span>
      </HeaderPage>

      <SocialWrapper>
        <Link href={info?.linkedin || '/'}>
          <SocialItem>
            <LinkedinIn width={120} height={120} />
            <Text size="1.5rem" weight={500}>
              LinkedIn
            </Text>
          </SocialItem>
        </Link>

        <Link href={info?.github || '/'}>
          <SocialItem>
            <Github width={120} height={120} />
            <Text size="1.5rem" weight={500}>
              Github
            </Text>
          </SocialItem>
        </Link>
      </SocialWrapper>
    </Wrapper>
  );
};

export default Contact;
