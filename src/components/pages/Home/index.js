import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Text } from '../../shared';
import {
  Avatar,
  Background,
  Container,
  Github,
  Linkedin,
  SocialWrapper,
  Wrapper,
} from './styled';

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
      <Background
        alt="Background theme"
        src="/images/background.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {info && (
        <Container>
          <Avatar
            alt="user image"
            objectFit="cover"
            src={info?.image || '/'}
            width={200}
            height={200}
          />
          <Text size="2rem" weight={500}>
            {info?.name}
          </Text>
          <Text>{skills}</Text>

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
