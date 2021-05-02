import { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { Text } from '../../shared';
import {
  ButtonGroup,
  Container,
  Galery,
  Images,
  Photo,
  Wrapper,
} from './styled';

const Portfolio = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState('all');
  const [info, setInfo] = useState(null);
  const options = useState({
    portuguese: [
      { name: 'all', description: 'Todos' },
      { name: 'web', description: 'Web' },
      { name: 'Mobile', description: 'Móvel' },
      { name: 'Other', description: 'Outros' },
    ],
    english: [
      { name: 'all', description: 'All' },
      { name: 'web', description: 'Web' },
      { name: 'Mobile', description: 'Mobile' },
      { name: 'Other', description: 'Others' },
    ],
  })[0];

  useEffect(async () => {
    const data = await getPostBySlug('about', language);
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="portfolio">
      <Container>
        <Text size="2rem" weight={600}>
          <Images width={24} />
          {info?.title}
        </Text>
        <ButtonGroup>
          {options[language].map(option => (
            <Text
              weight={600}
              className={selected == option.name && 'actived'}
              onClick={() => setSelected(prevState => option.name)}>
              {option.description}
            </Text>
          ))}
        </ButtonGroup>
      </Container>
      <Galery>
        <Photo src="/images/ballon.jpeg" width="100%" height="auto" />
        <Photo src="/images/background.jpeg" width="100%" height="auto" />
        <Photo src="/images/ballon.jpeg" width="100%" height="auto" />
        <Photo src="/images/background.jpeg" width="100%" height="auto" />
        <Photo src="/images/ballon.jpeg" width="100%" height="auto" />
        <Photo src="/images/background.jpeg" width="100%" height="auto" />
        <Photo src="/images/ballon.jpeg" width="100%" height="auto" />
        <Photo src="/images/background.jpeg" width="100%" height="auto" />
      </Galery>
    </Wrapper>
  );
};

export default Portfolio;
