import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
export const Container = styled(shared.Container)`
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const FolderOpen = styled(icon.FolderOpen)`
  margin-right: 1rem;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 20rem;
  height: 18rem;
  margin: 1rem;
  border: 0.1rem dashed #ccc;
  cursor: pointer;

  &:hover {
    border: 0.15rem solid #ccc;
  }
`;
