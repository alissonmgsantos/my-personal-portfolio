import { Container, Galery, Photo, Wrapper } from './styled';
const Portfolio = () => {
  return (
    <Wrapper id="portfolio">
      <Container>
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
    </Wrapper>
  );
};

export default Portfolio;
