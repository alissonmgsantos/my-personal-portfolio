import * as icon from '@styled-icons/fa-regular';
import * as iconSolid from '@styled-icons/fa-solid';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
`;
export const Container = styled(shared.Container)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;
  padding-top: 2rem;
  .scrollbar-container {
    padding: 0px 1rem;
  }
`;

export const FolderOpen = styled(icon.FolderOpen)`
  margin-right: 1rem;
`;
export const UserGraduate = styled(iconSolid.UserGraduate)`
  margin-right: 1rem;
`;

export const ExperienceContainer = styled.div`
  z-index: 1;
  height: 700px;
`;

export const ExperienceLeftBorder = styled.div`
  padding: 20px 30px 0px 1rem;
  border-left: 2px dashed #ccc;
  &:nth-child(odd) {
    & > :before,
    & > :after {
      border: none;
      background: transparent;
    }
  }
`;

export const ExperienceItem = styled.div`
  position: relative;
  border-bottom: 2px dashed #ccc;

  &:before {
    content: '';
    position: absolute;
    top: -2.3rem;
    left: -2rem;
    width: 1.563rem;
    height: 1.563rem;
    border-radius: 100%;
    border: 3px solid;
    background: ${({ theme }) => theme.background};
  }
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: -1.7rem;
    left: -1.4rem;
    width: 0.688rem;
    height: 0.688rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.color};
  }
`;

export const ExperienceRight = styled.div`
  z-index: 1;
  height: 820px;
`;
