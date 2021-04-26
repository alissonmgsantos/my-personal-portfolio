import * as icon from '@styled-icons/fa-regular';
import styled from 'styled-components';
import * as shared from '../../shared';

export const Wrapper = styled(shared.Wrapper)`
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: auto;
  padding: 4rem;
`;

export const Container = styled.div`
  display: grid !important;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  width: 100%;
`;

export const User = styled(icon.User)`
  margin-right: 1rem;
`;

export const ServiceContainer = styled.div`
  margin-top: 2rem;
  & > div:hover {
    transform: rotateX(30deg) rotateY(-15deg) rotate(30deg)
      translate(-25px, 50px);
  }
  & > div:hover:after {
    transform: translateX(100%);
    transition: all 1.2s ease-in-out;
  }

  & > :nth-child(1) {
    margin-top: 0;
    z-index: 3;
    background-color: #352f64;
    background-image: linear-gradient(135deg, #415197, #352f64);
    box-shadow: 5px 5px 60px rgba(34, 50, 84, 0.1), 1px 1px 0px 1px #352f64;
  }
  & > :nth-child(2) {
    margin-top: -70px;
    z-index: 2;
    background-color: #3f58e3;
    background-image: linear-gradient(135deg, #7f94fc, #3f58e3);
    box-shadow: 20px 20px 60px rgba(34, 50, 84, 0.5), 1px 1px 0px 1px #3f58e3;
  }
  & > :nth-child(3) {
    margin-top: -70px;
    z-index: 1;

    background-color: #2c6fd1;
    background-image: linear-gradient(135deg, #21bbfe, #2c6fd1);
    box-shadow: 20px 20px 60px rgba(34, 50, 84, 0.5), 1px 1px 0px 1px #2c6fd1;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 280px;
  height: 140px;
  border-radius: 12px;
  color: #fff;
  transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
  transition: all 0.4s ease;
  overflow: hidden;
  cursor: pointer;

  &:after {
    position: absolute;
    top: -70px;
    left: 0;
    content: '';
    width: 200%;
    height: 200%;
    transform: translateX(-100%);
  }

  & > svg {
    margin: 0.5rem;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  bottom: 28px;
  left: 15px;
  font-size: 18px;
  font-weight: 800;
`;

export const CardDescription = styled.span`
  position: absolute;
  font-weight: 700;
  bottom: 15px;
  left: 15px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.8;
`;
