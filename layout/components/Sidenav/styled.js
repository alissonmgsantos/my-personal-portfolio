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
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23232e;
`;

export const ProfileAvatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  background: #fff;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const ProfileUsername = styled.h5`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ProfileDescription = styled.small`
  color: #8c8c8e;
  font-size: 0.7rem;
  margin-top: 0.5rem;
`;

export const ProfileLocation = styled.small`
  color: #8c8c8e;
  font-size: 0.7rem;
  margin-top: 0.5rem;
`;

// SKILLS PROGRESS
export const SkillWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
`;

export const SkillProgressCircle = styled.div`
  width: 64px;
  height: 64px;
  background: #fff;
  border-radius: 50%;
  margin: 0 auto;
`;

export const SkillProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.3rem;
  background: #191923;
  margin: 0.8rem;
`;

const progress = (value = '0%') =>
  keyframes` 0% { width: 0; } 100% { width: ${value}} }`;

export const SkillProgressBar = styled.div`
  height: 0.3rem;
  width: 0;
  background: #2196f3;
  animation: ${props => progress(props.width)} 3s normal forwards;
`;

// KNOWLEDGE
export const KnowledgeWrapper = styled.section`
  display: flex;
  padding: 1.5rem 0.5rem;
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
