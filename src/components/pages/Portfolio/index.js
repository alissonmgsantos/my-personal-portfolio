import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPortfolio } from '../../../services';
import { ButtonGroup, Text } from '../../shared';
import {
  Container,
  Corner,
  Figure,
  Galery,
  Github,
  Images,
  Photo,
  Wrapper,
} from './styled';

const Portfolio = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState('all');

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

  const info = (context => {
    return getPortfolio(context);
  })(require.context('../../../../posts/portfolio', true, /\.md$/));

  return (
    <Wrapper id="portfolio">
      <Container>
        <Text size="2rem" weight={600} margin="0 0 4rem 0">
          <Images width={24} />
          {language == 'portuguese' ? 'Portfólio' : 'Portfolio'}
        </Text>
      </Container>
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
              <Photo src={project.image} alt={project.title} />
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
