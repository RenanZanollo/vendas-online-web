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
  justify-content: space-evently;
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
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  gap: 23px;
`;

export const KeepForgetContainer = styled.div`
  width: 280px;
  height: 42px;
  display: flex;
`;

export const SemCheckBox = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 40px;
`;

export const KeepLoggedText = styled.p`
  font-family: 'Inter';
  margin-left: 3px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.3px;
`;

export const ForgotPassword = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
`;

export const SignUpContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 3px;
  margin-top: 35px;
`;

export const SignUpText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 13px;
`;

export const SignUpLink = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  font-style: italic;
`;
