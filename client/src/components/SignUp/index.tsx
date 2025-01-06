import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/Api";
import { ErrorMessage, Form, SignUpContainer, Title } from "./styles";
import { Button } from "../../styles/components/Button";
import { TextButton } from "../../styles/components/TextButton";
import { InputText } from "../InputText";
import MailIcon from "../../public/icons/mail.svg";
import LockIcon from "../../public/icons/lock.svg";
import PersonIcon from "../../public/icons/person.svg";
import { useTranslation } from "react-i18next";

type SignUpData = {
  name: string;
  email: string;
  password: string;
}

type ApiError = {
  message: string;
  status?: number;
}

type SignUpProps = {
  onBackClick: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onBackClick }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await authService.signUp(formData.name, formData.email, formData.password);
      navigate('/signin');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{t('Register')}</Title>
      <p>{t('Enter your credentials to register')}</p>
      <InputText
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t('Enter your name')}
        icon={<img src={PersonIcon} />}
        required
      />
      <InputText
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t('Enter your email')}
        icon={<img src={MailIcon} />}
        required
      />
      <InputText
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder={t('Enter your password')}
        icon={<img src={LockIcon} />}
        required
      />
      {error && <ErrorMessage>{t(error)}</ErrorMessage>}
      <Button type="submit">{t('Sign Up')}</Button>
      <SignUpContainer>
        {t('Already have an account?')}
        <TextButton type="button" onClick={onBackClick}>{t('Sign In')}</TextButton>
      </SignUpContainer>
    </Form>
  );
}