import React from 'react';
import { Bio, SoftSkill, Skill, SkillItem } from './style';
import { Image, Title, SubTitle, Wrapper } from '../../theme/globalStyle';

const About = () => {
  const softSkills = [
    'Empatia',
    'Adaptabilidade',
    'Trabalho em equipe',
    'Criatividade',
  ];

  const hardSkills = [
    'angular',
    'bootstrap',
    'css3',
    'git',
    'github',
    'gitlab',
    'graphql',
    'html5',
    'javascript',
    'material',
    'mysql',
    'nodejs',
    'oracle',
    'php',
    'react',
    'sass',
    'sqlserver',
    'typescript',
    'vuejs',
  ];

  const findImage = (image) => {
    return require(`../../assets/images/skills/${image}.svg`);
  };

  return (
    <Wrapper id="about">
      <Title>Sobre</Title>
      <Bio>
        Natural de Salvador-Bahia/Brasil, sou apaixonado por desenvolvimento de
        soluções tecnológicas. Adoro trabalhar em equipe, sou criativo,
        disciplinado, com elevado sentido de responsabilidade e bom nível de
        adaptação. Atualmente trabalho na Solutis Tecnologias como desenvolvedor
        FullStack, função que me permite o estudo das mais diversas tecnologias
        e metodologias para utilizarmos em projetos.
      </Bio>
      <Skill>
        <SubTitle>Habilidades</SubTitle>
        <SkillItem>
          {softSkills.sort().map((item, key) => (
            <SoftSkill key={key}>
              {item} <hr />
            </SoftSkill>
          ))}
        </SkillItem>
        <SkillItem>
          {hardSkills.map((item, key) => (
            <Image
              key={key}
              src={findImage(item)}
              alt={item}
              width="48"
              height="48"
            />
          ))}
        </SkillItem>
      </Skill>
    </Wrapper>
  );
};

export default About;
