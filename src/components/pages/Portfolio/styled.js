import * as iconBrands from '@styled-icons/fa-brands';
import styled from 'styled-components';
import * as shared from '../../shared';
export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
`;

export const Container = styled(shared.Container)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Galery = styled.div`
  margin-top: 3rem;
  column-count: 3;
  column-gap: 1rem;
  @media (max-width: 425px) {
    column-count: 1;
  }
`;

export const Figure = styled.figure`
  position: relative;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Corner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 5rem solid #fff;
  border-left: 5rem solid transparent;
`;

export const Github = styled(iconBrands.Github)`
  position: absolute;
  top: -4.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: #333;
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  margin: 0 0 1rem 0;
  break-inside: avoid;
  max-height: 500px;
`;
