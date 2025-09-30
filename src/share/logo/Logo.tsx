import { LogoImage, BoxInput, TitleLogo } from './logo.styles';

const Logo = () => {
  return (
    <BoxInput>
      <LogoImage src="./logo.png" alt="Logo" />
      <TitleLogo>Please log in to continue.</TitleLogo>
    </BoxInput>
  );
};

export default Logo;
