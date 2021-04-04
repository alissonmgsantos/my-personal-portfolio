import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getPostBySlug } from '../../../pages/api';
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

const Sidenav = props => {
  const [info, setInfo] = useState(null);
  useEffect(async () => {
    const data = await getPostBySlug('layout');
    setInfo(prevState => data);
  }, []);

  return (
    <SidenavWrapper>
      <ProfileHeader>
        <ProfileAvatar src={info?.profile.image} />
        <ProfileUsername>{info?.profile.name}</ProfileUsername>
        <ProfileDescription>{info?.profile.description}</ProfileDescription>
        <ProfileLocation>{info?.profile.location}</ProfileLocation>
        <SocialWrapper>
          <Link href={info?.profile.github || '/'}>
            <Github width={24} height={24} />
          </Link>
          <Link href={info?.profile.linkedin || '/'}>
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
        {info?.skills.map((skill, key) => (
          <React.Fragment key={key}>
            <SkillText color="#fff">{skill.name}</SkillText>
            <SkillText color="#ccc">{skill.percentage}</SkillText>
            <SkillProgressBar width={skill.percentage} />
          </React.Fragment>
        ))}
      </SkillWrapper>

      <Divider />

      <KnowledgeWrapper>
        <KnowledgeList>
          {info?.knowledges.map((item, key) => (
            <KnowledgeListItem key={key}>{item.description}</KnowledgeListItem>
          ))}
        </KnowledgeList>
      </KnowledgeWrapper>
    </SidenavWrapper>
  );
};

export default Sidenav;
