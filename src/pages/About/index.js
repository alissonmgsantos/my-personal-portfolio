import React from 'react';
import { Bio, SoftSkill, Skill, SkillItem } from './style';
import { Icon, Title, SubTitle, Wrapper } from '../../theme/globalStyle';

const About = () => {
  const softSkills = ['Empatia', 'Adaptabilidade', 'Trabalho em equipe'];

  const hardSkills = [
    {
      label: 'Angular +2',
      icon: 'devicon-angularjs-plain colored fa-2x',
    },
    { label: 'HTML5', icon: 'devicon-html5-plain colored fa-2x' },
    { label: 'CSS3', icon: 'devicon-css3-plain colored fa-2x' },
    { label: 'Codeigniter', icon: 'devicon-codeigniter-plain colored fa-2x' },
    { label: 'JavaScript', icon: 'devicon-javascript-plain colored fa-2x' },
    { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored fa-2x' },
    { label: 'Git', icon: 'devicon-git-plain colored fa-2x' },
    { label: 'Github', icon: 'devicon-github-plain colored fa-2x' },
    { label: 'Gitlab', icon: 'devicon-gitlab-plain colored fa-2x' },
    { label: 'Laravel', icon: 'devicon-laravel-plain colored fa-2x' },
    { label: 'MySQL', icon: 'devicon-mysql-plain colored fa-2x' },
    { label: 'Oracle', icon: 'devicon-oracle-plain colored fa-2x' },
    { label: 'NodeJS', icon: 'devicon-nodejs-plain colored fa-2x' },
    { label: 'PHP', icon: 'devicon-php-plain colored fa-2x' },
    { label: 'React', icon: 'devicon-react-original colored fa-2x' },
    { label: 'SCSS', icon: 'devicon-sass-original colored fa-2x' },
    { label: 'TypeScript', icon: 'devicon-typescript-plain colored fa-2x' },
    { label: 'Vue.js', icon: 'devicon-vuejs-plain colored fa-2x' },
  ].sort((a, b) => {
    let x = a.label.toLowerCase();
    let y = b.label.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <Wrapper id="about">
      <Title>Sobre</Title>
      <Bio>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        nesciunt optio, praesentium, tempore in doloremque culpa et eius
        blanditiis quo laudantium sapiente nisi perferendis repellat officiis
        quos provident minima earum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Pariatur, nesciunt optio, praesentium, tempore in
        doloremque culpa et eius blanditiis quo laudantium sapiente nisi
        perferendis repellat officiis quos provident minima earum. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit.
      </Bio>
      <Skill>
        <SubTitle>Habildiades</SubTitle>
        <SkillItem>
          {softSkills.sort().map((item, key) => (
            <SoftSkill key={key}>
              {item} <hr />
            </SoftSkill>
          ))}
        </SkillItem>
        <SkillItem>
          {hardSkills.map((item, key) => (
            <Icon key={key} title={item.label} className={item.icon} />
          ))}
        </SkillItem>
      </Skill>
    </Wrapper>
  );
};

export default About;
