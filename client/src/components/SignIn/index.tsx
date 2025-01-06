import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ErrorMessage, Form, SignUpContainer, Title } from "./styles";
import { Button } from "../../styles/components/Button";
import { TextButton } from "../../styles/components/TextButton";
import { InputText } from "../InputText";
import MailIcon from "../../public/icons/mail.svg";
import LockIcon from "../../public/icons/lock.svg";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      <Title>{t('Welcome!')}</Title>
      <p>{t('Enter your credentials to access')}</p>
      <InputText
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder={t('Enter your email')}
        icon={<img src={MailIcon} />}
        required
      />
      <InputText
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder={t('Enter your password')}
        icon={<img src={LockIcon} />}
        required
      />
      {error && <ErrorMessage>{t(error)}</ErrorMessage>}
      <Button type="submit">{t('Sign In')}</Button>
      <SignUpContainer>
        {t('Don\'t have an account?')}
        <TextButton type="button" onClick={onSignUpClick}>{t('Sign Up')}</TextButton>
      </SignUpContainer>
    </Form>
  );
}