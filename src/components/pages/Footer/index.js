import React from 'react';
import { useLanguage } from '../../../providers/language';
import { Text } from '../../shared';
import { Wrapper } from './styled';

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date();

  return (
    <Wrapper>
      <Text weight={500}>
        {language == 'portuguese' ? 'Permaneça conectado' : 'Stay Connected'}
      </Text>
      <Text>Copyright | {year.getFullYear()}</Text>
    </Wrapper>
  );
};

export default Footer;
