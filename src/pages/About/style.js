import styled from 'styled-components';

export const Bio = styled.div((props) => ({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '800px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  justifyItems: 'center',
  color: props.theme.dark,
  fontSize: '1.2rem',
  fontStyle: 'italic',
  paddingBottom: '1.5rem',
}));

export const Skill = styled.div((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  paddingTop: '2rem',
}));

export const SkillItem = styled.div((props) => ({
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flex: 1,
  margin: '0.5rem',
}));

export const SoftSkill = styled.h3((props) => ({
  color: props.theme.dark,
  fontWeight: '500',
  width: '80%',
  hr: {
    borderBottom: `0.3rem solid ${props.theme.primary}`,
    borderRadius: '0.25rem',
  },
}));
