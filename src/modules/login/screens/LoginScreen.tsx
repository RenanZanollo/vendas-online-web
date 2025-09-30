import Input from '../../../share/inputs/input/Input';
import {
  BackgroundImage,
  ModalLogin,
  LimitedContainer,
  ContainerLoginScreen,
} from '../styles/loginScreen.styles';
import Logo from '../../../share/logo/Logo';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./BackgroundImage.png" />
      <ModalLogin>
        <Logo />
        <LimitedContainer>
          <Input placeholder="Login" />
          <Input placeholder="Password" />
        </LimitedContainer>
      </ModalLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
