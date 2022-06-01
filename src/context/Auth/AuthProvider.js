import { useState } from 'react';

import { login } from '../../services/login';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const handleLogin = async ({ email, password }) => {
    const result = await login({ email, password });
    if (!result?.hasError) {
      setUserInfo(result.usuario);
    }
    return result;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!userInfo, userInfo, onLogin: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
