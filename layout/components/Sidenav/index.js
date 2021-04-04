import Link from 'next/link';
import React from 'react';
import {
  Divider,
  Github,
  KnowledgeList,
  KnowledgeListItem,
  KnowledgeWrapper,
  Linkedin,
  ProfileAvatar,
  ProfileDescription,
  ProfileHeader,
  ProfileLocation,
  ProfileUsername,
  SidenavWrapper,
  SkillProgressBar,
  SkillProgressCircle,
  SkillText,
  SkillWrapper,
  SocialWrapper,
} from './styled';

const Sidenav = () => {
  return (
    <SidenavWrapper>
      <ProfileHeader>
        <ProfileAvatar />
        <ProfileUsername>Alisson Matos</ProfileUsername>
        <ProfileDescription>
          Front-end Develop | Back-end Develop
        </ProfileDescription>
        <ProfileLocation>Salvador - Bahia - Brasil</ProfileLocation>
        <SocialWrapper>
          <Link href="https://github.com/alissonmgsantos">
            <Github width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/alissonmgsantos">
            <Linkedin width={24} height={24} />
          </Link>
        </SocialWrapper>
      </ProfileHeader>
      <SkillWrapper>
        {[1, 2, 3].map((item, key) => (
          <SkillProgressCircle key={key} />
        ))}
      </SkillWrapper>

      <Divider />

      <SkillWrapper>
        {['50%', '60%', '70%', '80%', '90%'].map((item, key) => (
          <React.Fragment key={key}>
            <SkillText color="#fff">aqui</SkillText>
            <SkillText color="#ccc">{item}</SkillText>
            <SkillProgressBar width={item} />
          </React.Fragment>
        ))}
      </SkillWrapper>

      <Divider />

      <KnowledgeWrapper>
        <KnowledgeList>
          {[0, 0, 0, 0, 0, 0].map((item, key) => (
            <KnowledgeListItem key={key}>item item item </KnowledgeListItem>
          ))}
        </KnowledgeList>
      </KnowledgeWrapper>
    </SidenavWrapper>
  );
};

export default Sidenav;
