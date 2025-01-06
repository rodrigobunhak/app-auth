import { useState } from "react";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";
import { Container, FormSection, InfoSection } from "./styles";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true);
  
  return (
    <Container>
      {!isSignIn && (
        <FormSection>
          <SignUp onBackClick={() => setIsSignIn(true)} onSignUpClick={() => setIsSignIn(true)} />
        </FormSection>
      )}
      <InfoSection>
        <h1>Auth<span>.</span></h1>
        <p>{t('This is a')} <span>{t('practical development test')}</span> {t('designed to assess technical skills in a simulated context')}.</p>
      </InfoSection>
      {isSignIn && (
        <FormSection>
          <SignIn onSignUpClick={() => setIsSignIn(false)} />
        </FormSection>
      )}
    </Container>
  );
};

export default Login;