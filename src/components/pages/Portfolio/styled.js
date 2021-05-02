import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
  padding: 5rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const Container = styled(shared.Container)`
  align-items: center;
`;

export const Galery = styled.div`
  column-count: 3;
  column-gap: 10px;
`;

export const Photo = styled.img`
  border-radius: 0.3rem;
  width: 100%;
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;
`;
