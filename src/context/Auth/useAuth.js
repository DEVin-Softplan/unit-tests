import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return { message: 'useAuth deve estar envolvido pelo AuthProvider.' };
  }

  return context;
};
