import { useState } from "react";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";
import { Container, FormSection, InfoSection } from "./styles";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleBackClick = () => {
    setIsSignIn(true);
  };

  return (
    <Container>
      {!isSignIn && (
        <FormSection>
          <SignUp onBackClick={handleBackClick} />
        </FormSection>
      )}
      <InfoSection>
        <h1>Auth<span>.</span></h1>
        <p>{t('This is a')} <span>{t('practical development test')}</span> {t('designed to assess technical skills in a simulated context')}.</p>
      </InfoSection>
      {isSignIn && (
        <FormSection>
          <SignIn onSignUpClick={handleSignUpClick} />
        </FormSection>
      )}
    </Container>
  );
};

export default Login;