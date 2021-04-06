import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const HomeBanner = styled.div`
  width: 100%;
  background: #21222c;
  height: 300px;
  margin-bottom: 1rem;
  opacity: 50%;
`;

export const ContainerServices = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const CardServices = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #282a36;
  color: #ccc;
  letter-spacing: 0.5px;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
`;
