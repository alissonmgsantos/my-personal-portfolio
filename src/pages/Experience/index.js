import React from 'react';
import { List, ListItem, Timeline, LineAcademic, LineWork } from './style';
import {
  Card,
  CardHeader,
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
    },
  ];

  const works = [
    {
      company: 'Solutis Tecnologias.',
      role: 'Analista desenvolvedor',
      start: '2017',
      end: 'Presente',
    },
  ];
  return (
    <Wrapper id="experience">
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
