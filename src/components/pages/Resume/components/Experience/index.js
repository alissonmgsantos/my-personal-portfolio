import { CalendarAlt } from '@styled-icons/fa-regular';
import React from 'react';
import { Card, Text } from '../../../../shared';
import { CardDescription, Container } from './styled';

export const Experience = ({ experience, education }) => {
  return (
    <Container>
      <Card className="experience">
        <Text size="1.5rem" weight={600} margin="0 0 1rem 0">
          {experience.title}
        </Text>
        {experience?.datasource.map((item, key) => (
          <CardDescription key={key}>
            <Text size="1rem" weight={600} padding="1rem 0 0 0">
              {item.role}
            </Text>

            <Text size="0.8rem">
              <CalendarAlt width={12} style={{ margin: '0 0.5rem 0.2rem 0' }} />
              {item.period} | {item.company}
            </Text>
            <Text padding="0.5rem 0" weight={300}>
              {item.description}
            </Text>
          </CardDescription>
        ))}
      </Card>
      <Card className="education">
        <Text size="1.5rem" weight={600} margin="0 0 1rem 0">
          {education.title}
        </Text>
        {education?.datasource.map((item, key) => (
          <CardDescription key={key}>
            <Text size="1rem" weight={600} padding="1rem 0 0 0">
              {item.role}
            </Text>

            <Text size="0.8rem">
              <CalendarAlt width={12} style={{ margin: '0 0.5rem 0.2rem 0' }} />
              {item.period} | {item.company}
            </Text>
            <Text padding="0.5rem 0" weight={300}>
              {item.description}
            </Text>
          </CardDescription>
        ))}
      </Card>
    </Container>
  );
};

export default Experience;
