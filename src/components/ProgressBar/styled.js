import styled, { keyframes } from 'styled-components';
import * as shared from '../../components/shared';

export const Container = styled(shared.Container)`
  justify-content: space-between;
`;

const progress = (value = '0%') =>
  keyframes` 0% { width: 0; } 100% { width: ${value}} }`;

export const Progressbar = styled.div`
  width: 100%;
  height: 0.4rem;
  background: #191923;
  margin: 0.5rem 0 1rem 0;
  &:after {
    content: '';
    display: block;
    height: 0.4rem;
    width: 0;
    background: #2196f3;
    animation: ${props => progress(props.width)} 3s normal forwards;
  }
`;
