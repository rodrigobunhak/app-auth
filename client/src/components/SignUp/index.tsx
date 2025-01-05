import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/Api";
import { ErrorMessage, Form, Title } from "./styles";
import { Button } from "../../styles/components/Button";
import { TextButton } from "../../styles/components/TextButton";
import { InputText } from "../InputText";
import MailIcon from "../../public/icons/mail.svg";
import LockIcon from "../../public/icons/lock.svg";
import PersonIcon from "../../public/icons/person.svg";

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
      <Title>Legal!</Title>
      <p>Informe suas credenciais para efetuar seu cadastro</p>
      <InputText
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Informe seu nome"
        icon={<img src={PersonIcon} />}
        required
      />
      <InputText
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Informe seu e-mail"
        icon={<img src={MailIcon} />}
        required
      />
      <InputText
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Informe seu senha"
        icon={<img src={LockIcon} />}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Sign Up</Button>
      <TextButton type="button" onClick={onBackClick}>Voltar</TextButton>
    </Form>
  );
}