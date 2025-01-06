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
