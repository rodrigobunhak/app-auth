import { useState } from "react";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";
import { Container, FormSection, InfoSection } from "./styles";

const Login: React.FC = () => {
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
        <p>Este é um <span>teste prático</span> de desenvolvimento, criado para avaliar habilidades técnicas em um contexto simulado. </p>
      </InfoSection>
      {isSignIn && (
        <FormSection>
          <SignIn onSignUpClick={handleSignUpClick} />
        </FormSection>
      )}
      {/* <FormSection>
        {isSignIn ? (
          <SignIn onSignUpClick={handleSignUpClick} />
        ) : (
          <SignUp onBackClick={handleBackClick} />
        )}
      </FormSection> */}
    </Container>
  );
};

export default Login;