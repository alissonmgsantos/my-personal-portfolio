import React from 'react';
import { List, ListItem, Timeline, LineAcademic, LineWork } from './style';
import {
  Card,
  CardHeader,
  CardContent,
  Wrapper,
  Title,
  SubTitle,
  Paragraph,
} from '../../theme/globalStyle';

const Experience = () => {
  const academics = [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      university: 'Centro Universitário Jorge Amado',
      start: '2015',
      end: '2017',
      description:
        ' Lorem ipsum dolor sit amet quo ei simul congue exerci ad necadmodum perfecto.',
    },
  ];

  const works = [
    {
      company: 'Solutis Tecnologias LTDA.',
      role: 'Analista desenvolvedor',
      start: '2017',
      end: 'Presente',
      description:
        ' Lorem ipsum dolor sit amet quo ei simul congue exerci ad necadmodum perfecto.',
    },
  ];
  return (
    <Wrapper
      id="experience"
      alignContent="flex-start"
      justifyContent="flex-start"
    >
      <Title>Experiências</Title>
      <List>
        <ListItem>
          {academics.map((item, key) => (
            <Timeline key={key}>
              <Card>
                <CardHeader flexDirection="column">
                  <Paragraph fontStyle="italic" fontSize="0.8rem">
                    {item.start} - {item.end}
                  </Paragraph>
                  <Paragraph fontSize="1rem">{item.university}</Paragraph>
                  <SubTitle fontSize="1.2rem">{item.course}</SubTitle>
                </CardHeader>
                <CardContent>
                  <Paragraph fontStyle="italic">{item.description}</Paragraph>
                </CardContent>
              </Card>
              <LineAcademic />
            </Timeline>
          ))}
        </ListItem>
        <ListItem>
          {works.map((item, key) => (
            <Timeline key={key}>
              <Card>
                <CardHeader flexDirection="column">
                  <Paragraph fontStyle="italic" fontSize="0.8rem">
                    {item.start} - {item.end}
                  </Paragraph>
                  <Paragraph>{item.company}</Paragraph>
                  <SubTitle fontSize="1.2rem">{item.role}</SubTitle>
                </CardHeader>
                <CardContent>
                  <Paragraph fontStyle="italic">{item.description}</Paragraph>
                </CardContent>
              </Card>
              <LineWork />
            </Timeline>
          ))}
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Experience;
