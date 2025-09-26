import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoImage = styled.img`
  height: 50px;
  width: 60px;
  top: 0;
`;

export const ModalLogin = styled.div`
  background-color: #e5edff;
  border: 1px solid rgba(144, 144, 144, 0.8);

  /* Responsividade */
  width: 360px;
  min-width: 300px;

  height: 470px;
  min-height: 391.67px;

  /* Layout interno */
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  background-color: blue;
`;
