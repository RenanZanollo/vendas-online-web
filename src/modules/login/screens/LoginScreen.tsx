import { BackgroundImage } from '../styles/loginScreen.styles';
import { ModalLogin } from '../styles/loginScreen.styles';
import { LogoImage } from '../styles/loginScreen.styles';
import { LimitedContainer } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./BackgroundImage.png" />
      <ModalLogin>
        <LogoImage src="./logo.png" />
        <LimitedContainer>
          <input type="text" />
        </LimitedContainer>
      </ModalLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
