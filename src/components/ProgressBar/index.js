import React from 'react';
import { Text } from '../shared';
import { Container, Progressbar } from './styled';

const ProgressBar = ({ title, percentage }) => {
  return (
    <div>
      <Container>
        <Text weight={600}>{title}</Text>
        <Text weight={600}>{percentage}</Text>
      </Container>
      <Progressbar width={percentage} />
    </div>
  );
};

export default ProgressBar;
