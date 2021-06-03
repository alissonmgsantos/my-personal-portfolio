import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Image, Text } from '../../shared';
import { Container, Github, Linkedin, SocialWrapper, Wrapper } from './styled';

const Home = () => {
  const { language } = useLanguage();

  const [info, setInfo] = useState(null);
  const [loop, setLoop] = useState(0);
  const [skills, setSkills] = useState(null);

  useEffect(async () => {
    const data = await getPostBySlug('profile', language);
    setInfo(prevState => data);
    setSkills(prevState => data.description[0]);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoop(prevState => prevState + 1);
      setSkills(prevState => '');
      info?.description[loop % info.description.length]
        .split('')
        .map((value, i) =>
          setTimeout(() => setSkills(prevState => prevState + value), 75 * i)
        );
    }, 2000);
    return () => clearInterval(interval);
  }, [skills, loop]);

  return (
    <Wrapper id="home">
      {info && (
        <Container>
          <Image
            alt="user image"
            src={info?.image || '/'}
            width={250}
            height={250}
            borderRadius="100%"
          />
          <Text size="2.5rem" weight={600}>
            {info?.name}
          </Text>
          <Text size="1rem">{skills}</Text>

          <SocialWrapper>
            <Link href={info?.linkedin || '/'}>
              <Linkedin width={40} height={40} />
            </Link>
            <Link href={info?.github || '/'}>
              <Github width={40} height={40} />
            </Link>
          </SocialWrapper>
        </Container>
      )}
    </Wrapper>
  );
};

export default Home;
