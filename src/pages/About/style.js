import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 1rem;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  margin-left: 14px;
  position: relative;
  color: ${(props) => props.theme.dark};
  padding-bottom: 1rem;
  &::before {
    content: '';
    background-image: url(https://pxltheme.com/html/bolby/demo/images/dots-bg.svg);
    display: block;
    width: 2rem;
    height: 2rem;
    left: -1rem;
    top: -0.5rem;
    position: absolute;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.dark};
  width: 100%;
  padding-bottom: 1rem;
`;

export const Bio = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  justify-items: center;
  color: ${(props) => props.theme.dark};
  font-size: 1.2rem;
  font-style: italic;
  padding-bottom: 1.5rem;
`;

export const Skill = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;
export const SkillItem = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 0.5rem;
  i {
    font-size: 2.5rem;
    padding: 0 0.5rem;
  }
`;

export const SoftSkill = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.dark};
  font-weight: 500;
  width: 75%;
  hr {
    border-bottom: 0.3rem solid ${(props) => props.theme.primary};
    border-radius: 0.25rem;
  }
`;
