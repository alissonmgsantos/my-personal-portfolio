import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import {
  Avatar,
  Background,
  Container,
  Description,
  Github,
  Linkedin,
  SocialWrapper,
  Username,
  Wrapper,
} from './styled';

const Home = () => {
  const { language } = useLanguage();

  const [info, setInfo] = useState(null);
  const [loop, setLoop] = useState(0);
  const [skills, setSkills] = useState([]);

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
    <Wrapper>
      <Background
        alt="Background theme"
        src="/background.jpeg"
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
          <Username>{info?.name}</Username>
          <Description>{skills}</Description>

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
