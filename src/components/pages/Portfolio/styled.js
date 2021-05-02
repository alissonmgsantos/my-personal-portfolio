import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
`;

export const Images = styled(icon.Images)`
  margin-right: 1rem;
`;

export const Container = styled(shared.Container)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
