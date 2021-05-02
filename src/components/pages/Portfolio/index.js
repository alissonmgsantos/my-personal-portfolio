import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../providers/language';
import { getPostBySlug } from '../../../services';
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

const Portfolio = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState('all');
  const [info, setInfo] = useState(null);
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
    const data = await getPostBySlug('about');
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
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/windmill.jpg"
            alt="A windmill"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/suspension-bridge.jpg"
            alt="The Clifton Suspension Bridge"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/suspension-bridge.jpg"
            alt="The Clifton Suspension Bridge"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/sunset.jpg"
            alt="Sunset and boats"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/snowy.jpg"
            alt="a river in the snow"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/bristol-balloons1.jpg"
            alt="a single checked balloon"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/dog-balloon.jpg"
            alt="a hot air balloon shaped like a dog"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/abq-balloons.jpg"
            alt="View from a hot air balloon of other balloons"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/disney-balloon.jpg"
            alt="a balloon fairground ride"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/bristol-harbor.jpg"
            alt="sunrise over a harbor"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>

        <Figure>
          <Photo
            src="https://assets.codepen.io/12005/bristol-balloons2.jpg"
            alt="three hot air balloons in a blue sky"
          />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo src="/images/ballon.jpeg" alt="" />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
        <Figure>
          <Photo src="/images/background.jpeg" alt="" />
          <Corner>
            <Link href="/">
              <Github width={32} />
            </Link>
          </Corner>
        </Figure>
      </Galery>
    </Wrapper>
  );
};

export default Portfolio;
