import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { Text } from '../../shared';
import {
  ButtonGroup,
  Container,
  Corner,
  Figure,
  Galery,
  Github,
  Images,
  Photo,
  Wrapper,
} from './styled';

const Portfolio = ({ portfolio }) => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState('all');
  const [info, setInfo] = useState([]);
  const options = useState({
    portuguese: [
      { name: 'all', description: 'Todos' },
      { name: 'web', description: 'Web' },
      { name: 'mobile', description: 'Móvel' },
      { name: 'other', description: 'Outros' },
    ],
    english: [
      { name: 'all', description: 'All' },
      { name: 'web', description: 'Web' },
      { name: 'mobile', description: 'Mobile' },
      { name: 'other', description: 'Others' },
    ],
  })[0];

  useEffect(async () => {
    setInfo(prevState => portfolio);
  }, [language]);

  return (
    <Wrapper id="portfolio">
      <Container>
        <Text size="2rem" weight={600}>
          <Images width={24} />
          {language == 'portuguese' ? 'Portfólio' : 'Portfolio'}
        </Text>
        <ButtonGroup>
          {options[language].map((option, key) => (
            <Text
              key={key}
              weight={600}
              className={selected == option.name && 'actived'}
              onClick={() => setSelected(prevState => option.name)}>
              {option.description}
            </Text>
          ))}
        </ButtonGroup>
      </Container>
      <Galery>
        {info
          .filter(value => value.type === selected)
          .map((project, key) => (
            <Figure key={key}>
              <Photo src={project.image} alt={project.title} />
              <Corner>
                <Link href={project.repository || '/'}>
                  <Github width={32} />
                </Link>
              </Corner>
            </Figure>
          ))}

        {selected == 'all' &&
          info.map((project, key) => (
            <Figure key={key}>
              <Photo src={project.image} alt="A windmill" />
              <Corner>
                <Link href={project.repository || '/'}>
                  <Github width={32} />
                </Link>
              </Corner>
            </Figure>
          ))}
      </Galery>
    </Wrapper>
  );
};

export default Portfolio;
