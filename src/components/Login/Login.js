import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardContent, Typography } from '@mui/material';

import { useAuth } from '../../context/Auth';
import { LoginForm } from './components/LoginForm';
import { CardStyled } from './Login.styles';

export const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [errorLogin, setErrorLogin] = useState('');

  const handleSubmit = async ({ values }) => {
    const result = await onLogin(values);
    if (result?.hasError) {
      return setErrorLogin(result.message);
    }

    setErrorLogin('');
    navigate('/foruns');
  };

  return (
    <CardStyled variant="outlined">
      <Typography variant="h4">DevInHouse - Login</Typography>

      <CardContent>
        <LoginForm onSubmit={handleSubmit} />

        {!!errorLogin && (
          <Typography variant="subtitle1" color="red">
            {errorLogin}
          </Typography>
        )}
      </CardContent>
    </CardStyled>
  );
};
