import { createContext, useContext, useState, ReactNode } from 'react';
import { authService } from '../services/Api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('@App:user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  });

  const isAuthenticated = !!user;

  async function signIn(email: string, password: string) {
    try {
      const response = await authService.signIn(email, password);
      const userData = {
        name: response.data.user.name,
        email: response.data.user.email
      };
      localStorage.setItem('@App:user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw error;
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      await authService.signUp(name, email, password);
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}