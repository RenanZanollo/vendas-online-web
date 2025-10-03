import Input from '../../../share/inputs/input/Input';
import {
  BackgroundImage,
  ModalLogin,
  LimitedContainer,
  ContainerLoginScreen,
  KeepForgetContainer,
  KeepLoggedText,
  ForgotPassword,
  SemCheckBox,
  SignUpContainer,
  SignUpText,
  SignUpLink,
} from '../styles/loginScreen.styles';
import Logo from '../../../share/logo/Logo';
import CheckBox from '../../../share/checkbox/CheckBox';
import ButtonHome from '../../../share/buttons/button-home/ButtonHome';
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
        <KeepForgetContainer>
          <CheckBox />
          <SemCheckBox>
            <KeepLoggedText>Keep me logged in</KeepLoggedText>
            <ForgotPassword>Forgot password?</ForgotPassword>
          </SemCheckBox>
        </KeepForgetContainer>
        <ButtonHome>Log in</ButtonHome>
        <SignUpContainer>
          <SignUpText>Do not have account?</SignUpText>
          <SignUpLink>Sign up</SignUpLink>
        </SignUpContainer>
      </ModalLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
