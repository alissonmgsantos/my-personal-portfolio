import * as icon from '@styled-icons/boxicons-logos';
import styled, { keyframes } from 'styled-components';

export const SidenavWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20rem;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  background: #20202a;
`;

// DIVIDER
export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: #646466;
  opacity: 0.3;
  margin: 0 auto;
`;

// PROFILE
export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 3rem 0.5rem 2rem 0.5rem;
  background: #23232e;
  box-shadow: 0 2px 4px 0 rgb(15 15 20 / 10%);
`;

export const ProfileAvatar = styled.img`
  width: 6rem;
  height: 6rem;
  background: #fff;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const ProfileUsername = styled.h5`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
`;

export const ProfileDescription = styled.small`
  color: #8c8c8e;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const ProfileLocation = styled.small`
  color: #8c8c8e;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

// SKILLS PROGRESS
export const SkillWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 1rem;
`;

export const SkillProgressCircle = styled.div`
  width: 64px;
  height: 64px;
  background: #fff;
  border-radius: 50%;
  margin: 0 auto;
`;

export const SkillText = styled.span`
  font-size: 0.8rem;
  color: ${props => props.color};
`;

const progress = (value = '0%') =>
  keyframes` 0% { width: 0; } 100% { width: ${value}} }`;

export const SkillProgressBar = styled.div`
  width: 100%;
  height: 0.3rem;
  background: #191923;
  margin: 0.5rem 0 1rem 0;

  &:after {
    content: '';
    display: block;
    height: 0.3rem;
    width: 0;
    background: #2196f3;
    animation: ${props => progress(props.width)} 3s normal forwards;
  }
`;

// KNOWLEDGE
export const KnowledgeWrapper = styled.section`
  display: flex;
  padding: 2rem 1rem;
`;

export const KnowledgeList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const KnowledgeListItem = styled.li`
  color: #8c8c8e;
  margin-bottom: 0.5rem;
  &:before {
    content: '✔';
    color: #2196f3;
    padding-inline-start: 1ch;
    padding-inline-end: 1ch;
  }
`;

// Social
export const SocialWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 0.5rem;
`;

export const Github = styled(icon.Github)`
  color: #fff;
  cursor: pointer;
  margin: 0 0.3rem;
`;
export const Linkedin = styled(icon.Linkedin)`
  color: #fff;
  cursor: pointer;
  margin: 0 0.3rem;
`;
