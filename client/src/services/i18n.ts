import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Password must contain at least one number': 'Password must contain at least one number',
        'Password must be at least 8 characters long': 'Password must be at least 8 characters long',
        'Password must contain at least one special character': 'Password must contain at least one special character',
        'Password must contain at least one uppercase letter': 'Password must contain at least one uppercase letter',
        'Password must contain at least one lowercase letter': 'Password must contain at least one lowercase letter',
        'Invalid email format': 'Invalid email format',
        'Email must not exceed 320 characters': 'Email must not exceed 320 characters',
        'Local part of the email must not exceed 64 characters': 'Local part of the email must not exceed 64 characters',
        'Domain part of the email must not exceed 255 characters': 'Domain part of the email must not exceed 255 characters',
        'User name is required': 'User name is required',
        'User email is required': 'User email is required',
        'User password is required': 'User password is required',
        'Invalid credential': 'Invalid credential',
        'Email and password are required': 'Email and password are required',
        'Token expired': 'Token expired',
        'Invalid token': 'Invalid token',

        'Logged in as': 'Logged in as',
        'Logout': 'Logout',
        'Welcome!': 'Welcome!',
        'Enter your credentials to access': 'Enter your credentials to access',
        'Enter your email': 'Enter your email',
        'Enter your password': 'Enter your password',
        'Sign In': 'Sign In',
        'Don\'t have an account?': 'Don\'t have an account?',
        'Sign Up': 'Sign Up',
        'Register': 'Register',
        'Enter your credentials to register': 'Enter your credentials to register',
        'Enter your name': 'Enter your name',
        'Already have an account?': 'Already have an account?',
        'This is a': 'This is a',
        'practical development test': 'practical development test',
        'designed to assess technical skills in a simulated context': 'test designed to assess technical skills in a simulated context',
      },
    },
    pt: {
      translation: {
        'Password must contain at least one number': 'A senha deve conter pelo menos um número',
        'Password must be at least 8 characters long': 'A senha deve ter no mínimo 8 caracteres',
        'Password must contain at least one special character': 'A senha deve conter pelo menos um caractere especial',
        'Password must contain at least one uppercase letter': 'A senha deve conter pelo menos uma letra maiúscula',
        'Password must contain at least one lowercase letter': 'A senha deve conter pelo menos uma letra minúscula',
        'Invalid email format': 'Formato de e-mail inválido',
        'Email must not exceed 320 characters': 'O e-mail não pode exceder 320 caracteres',
        'Local part of the email must not exceed 64 characters': 'A parte local do e-mail não pode exceder 64 caracteres',
        'Domain part of the email must not exceed 255 characters': 'A parte do domínio do e-mail não pode exceder 255 caracteres',
        'User name is required': 'Nome de usuário é obrigatório',
        'User email is required': 'E-mail do usuário é obrigatório',
        'User password is required': 'Senha do usuário é obrigatória',
        'Invalid credential': 'Credenciais inválidas',
        'Email and password are required': 'E-mail e senha são obrigatórios',
        'Token expired': 'Token expirado',
        'Invalid token': 'Token inválido',
        
        'Logged in as': 'Conectado como',
        'Logout': 'Sair',
        'Welcome!': 'Bem-vindo!',
        'Enter your credentials to access': 'Digite suas credenciais para acessar',
        'Enter your email': 'Digite seu e-mail',
        'Enter your password': 'Digite sua senha',
        'Sign In': 'Entrar',
        'Don\'t have an account?': 'Não tem uma conta?',
        'Sign Up': 'Cadastrar-se',
        'Register': 'Cadastro',
        'Enter your credentials to register': 'Digite suas credenciais para se cadastrar',
        'Enter your name': 'Digite seu nome',
        'Already have an account?': 'Já tem uma conta?',
        'This is a': 'Este é um',
        'practical development test': 'teste prático de desenvolvimento',
        'designed to assess technical skills in a simulated context': 'criado para avaliar habilidades técnicas em um contexto simulado',
      },
    },
  },
  lng: 'pt', // Define a língua padrão
  fallbackLng: 'en', // Caso a tradução não seja encontrada
  interpolation: {
    escapeValue: false, // Não é necessário para o React
  },
});

export default i18n;
