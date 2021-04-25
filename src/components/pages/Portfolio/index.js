import { Container } from '../../shared';
import { Galery, Photo } from './styled';
const Portfolio = () => {
  return (
    <Container name="portfolio" id="portfolio">
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
    </Container>
  );
};

export default Portfolio;
