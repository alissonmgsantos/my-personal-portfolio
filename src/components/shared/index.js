import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 5rem 3rem;
  @media (max-width: 800px) {
    padding: 6rem 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Text = styled.p`
  text-align: ${props => props.align || 'initial'};
  font-size: ${props => props.size || '100%'};
  font-weight: ${props => props.weight || 'normal'};
  letter-spacing: ${props => props.spacing || 'normal'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  & > p {
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

// DIVIDER
export const Divider = styled.div`
  width: 90%;
  height: 0.01rem;
  background: #ccc;
  opacity: 0.3;
  margin: 0 auto;
`;
