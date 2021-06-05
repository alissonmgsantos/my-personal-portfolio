import styled from 'styled-components';

export const Image = styled.img`
  object-fit: ${props => props.objectFit || 'contain'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
`;

export const Wrapper = styled.section`
  display: flex;
  padding: 2rem 1rem;
`;

export const Container = styled.div`
  display: flex;
`;

export const HeaderPage = styled.div`
  position: relative;
  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 0.1rem;
    left: calc(50% - 3rem);
    bottom: -1.25rem;
    background-color: ${({ theme }) => theme.color};
  }

  &:before {
    left: calc(50% + 1rem);
  }

  & > span {
    position: absolute;
    width: 35px;
    height: 17px;
    left: calc(50% - 1.1rem);
    margin-top: 0.6rem;
  }

  & > span:before,
  & > span:after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    border: 0.125rem solid ${({ theme }) => theme.color};
    border-radius: 3.125rem 3.125rem 0 3.125rem;
    transform: rotate(-45deg);
  }

  & > span:after {
    left: auto;
    right: 0;
    border-radius: 3.125rem 3.125rem 3.125rem 0;
    transform: rotate(45deg);
  }
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

export const Avatar = styled.img`
  border-radius: 100%;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 0.5rem;
  margin: 3rem 1rem;
  padding: 2rem;
`;
