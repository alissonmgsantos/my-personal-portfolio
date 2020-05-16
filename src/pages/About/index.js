import React from 'react';
import {
  Bio,
  Wrapper,
  SoftSkill,
  Skill,
  SkillItem,
  Title,
  SubTitle,
} from './style';

const About = () => {
  const softSkills = ['Empatia', 'Adaptabilidade', 'Trabalho em equipe'];

  const hardSkills = [
    { label: 'Angular +2', icon: 'devicon-angularjs-plain colored' },
    { label: 'HTML5', icon: 'devicon-html5-plain colored' },
    { label: 'CSS3', icon: 'devicon-css3-plain colored' },
    { label: 'Codeigniter', icon: 'devicon-codeigniter-plain colored' },
    { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { label: 'Git', icon: 'devicon-git-plain colored' },
    { label: 'Github', icon: 'devicon-github-plain colored' },
    { label: 'Gitlab', icon: 'devicon-gitlab-plain colored' },
    { label: 'Laravel', icon: 'devicon-laravel-plain colored' },
    { label: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { label: 'Oracle', icon: 'devicon-oracle-plain colored' },
    { label: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
    { label: 'PHP', icon: 'devicon-php-plain colored' },
    { label: 'React', icon: 'devicon-react-original colored' },
    { label: 'SCSS', icon: 'devicon-sass-original colored' },
    { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { label: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
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
    <Wrapper>
      <Title>Sobre</Title>
      <Bio>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        nesciunt optio, praesentium, tempore in doloremque culpa et eius
        blanditiis quo laudantium sapiente nisi perferendis repellat officiis
        quos provident minima earum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Pariatur, nesciunt optio, praesentium, tempore in
        doloremque culpa et eius blanditiis quo laudantium sapiente nisi
        perferendis repellat officiis quos provident minima earum. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Pariatur, nesciunt optio,
        praesentium, tempore in doloremque culpa et eius blanditiis quo
        laudantium sapiente nisi perferendis repellat officiis quos provident
        minima earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Modi qui totam incidunt quos aut hic maxime magnam blanditiis et, ea
        facere, optio voluptate esse nesciunt, commodi quo dignissimos vero
        dicta.
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
            <i key={key} title={item.label} className={item.icon} />
          ))}
        </SkillItem>
      </Skill>
    </Wrapper>
  );
};

export default About;
