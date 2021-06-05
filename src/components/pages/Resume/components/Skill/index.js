import React from 'react';
import { ProgressBar } from '../../../..';
import { Image, Text } from '../../../../shared';
import { Card } from './styled';

export const Skill = ({ title = null, soft_skills = [] }) => {
  const skills = (context => {
    return context.keys().map(item => item.replace('./', '/images/skills/'));
  })(require.context('../../../../../../public/images/skills', true, /\.svg$/));

  return (
    <Card>
      <Text className="title" size="1.5rem" weight={600}>
        {title}
      </Text>

      <div className="soft-skills">
        {soft_skills.map((item, key) => (
          <ProgressBar
            key={key}
            title={item.name}
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="hard-skills" align="center">
        {['javascript', 'nodejs', 'php', 'react', 'vuejs', 'angular'].map(
          (item, key) => (
            <Image
              key={key}
              alt={`${item}`}
              src={`/images/skills/${item}.svg`}
              width={100}
              height={100}
              margin="0 2rem"
            />
          )
        )}
      </div>

      <div className="all-skills" align="center">
        {skills.map((item, key) => (
          <Image
            key={key}
            alt={`${item}`}
            src={item}
            width={60}
            height={60}
            margin="0.5rem"
          />
        ))}
      </div>
    </Card>
  );
};

export default Skill;
