import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 4rem 3rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Text = styled.p`
  text-align: ${props => props.align || 'initial'};
  font-size: ${props => props.size || '100%'};
  font-weight: ${props => props.weight || 'normal'};
  letter-spacing: ${props => props.spacing || 'normal'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`;
