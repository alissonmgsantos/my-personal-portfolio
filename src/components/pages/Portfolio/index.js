import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
import { ButtonGroup, HeaderPage, Image, Text } from '../../shared';
import {
  Container,
  Corner,
  Figure,
  Galery,
  Github,
  Photo,
  Wrapper,
} from './styled';

const Portfolio = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState(null);
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

  useEffect(async () => {
    const data = await getPostBySlug('portfolio', 'portfolio');
    setInfo(prevState => data);
  }, [language]);

  return (
    <Wrapper id="portfolio">
      <HeaderPage>
        <Text size="2rem" weight={600} align="center">
          {language == 'portuguese' ? 'Portfólio' : info?.title}
        </Text>
        <span></span>
      </HeaderPage>

      <ButtonGroup>
        {options[language].map((option, key) => (
          <Text
            padding="5rem 0 0 0"
            key={key}
            weight={600}
            className={selected == option.name && 'actived'}
            onClick={() => setSelected(prevState => option.name)}>
            {option.description}
          </Text>
        ))}
      </ButtonGroup>

      <Container>
        <Image src="/images/construction.svg" width="50%" />
      </Container>

      <Galery>
        {info?.portfolio_list
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
          info?.portfolio_list.map((project, key) => (
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
