import React from 'react';
import {
  Divider,
  KnowledgeList,
  KnowledgeListItem,
  KnowledgeWrapper,
  ProfileAvatar,
  ProfileDescription,
  ProfileHeader,
  ProfileLocation,
  ProfileUsername,
  SidenavWrapper,
  SkillProgressBar,
  SkillProgressBarWrapper,
  SkillProgressCircle,
  SkillWrapper,
} from './styled';

const Sidenav = () => {
  return (
    <SidenavWrapper>
      <ProfileHeader>
        <ProfileAvatar />
        <ProfileUsername>Nome</ProfileUsername>
        <ProfileDescription>
          Front-end Develop | Back-end Develop
        </ProfileDescription>
        <ProfileLocation>Salvador - Bahia - Brasil</ProfileLocation>
      </ProfileHeader>

      <SkillWrapper>
        {[1, 2, 3].map((item, key) => (
          <SkillProgressCircle key={key} />
        ))}
      </SkillWrapper>

      <Divider />

      <SkillWrapper>
        {['50%', '60%', '70%', '80%', '90%'].map((item, key) => (
          <SkillProgressBarWrapper key={key}>
            <SkillProgressBar width={item} />
          </SkillProgressBarWrapper>
        ))}
      </SkillWrapper>

      <Divider />

      <KnowledgeWrapper>
        <KnowledgeList>
          {[0, 0, 0, 0].map((item, key) => (
            <KnowledgeListItem key={key}>item item </KnowledgeListItem>
          ))}
        </KnowledgeList>
      </KnowledgeWrapper>

      <Divider />
    </SidenavWrapper>
  );
};

export default Sidenav;
