import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ErrorMessage, Form, SignUpContainer, Title } from "./styles";
import { Button } from "../../styles/components/Button";
import { TextButton } from "../../styles/components/TextButton";
import { InputText } from "../InputText";
import MailIcon from "../../public/icons/mail.svg";
import LockIcon from "../../public/icons/lock.svg";

type SignInCredentials = {
  email: string;
  password: string;
}

type ApiError = {
  message: string;
  status?: number;
}

type SignInProps = {
  onSignUpClick: () => void;
}


export const SignIn: React.FC<SignInProps> = ({ onSignUpClick }) => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: '',
    password: '',
  });


  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await signIn(credentials.email, credentials.password);
      navigate('/users');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Bem vindo!</Title>
      <p>Informe suas credenciais para acessar</p>
      <InputText
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Informe seu e-mail"
        icon={<img src={MailIcon} />}
        required
      />
      <InputText
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Informe sua senha"
        icon={<img src={LockIcon} />}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Sign In</Button>
      <SignUpContainer>
        Não tem uma conta?
        <TextButton type="button" onClick={onSignUpClick}>Sign Up</TextButton>
      </SignUpContainer>
    </Form>
  );
}