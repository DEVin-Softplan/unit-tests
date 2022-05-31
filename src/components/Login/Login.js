import { useState } from 'react';

import { CardContent, Button, Typography } from '@mui/material';
import { CardStyled, TextFieldStyled } from './Login.styles';

export const Login = ({ onSubmit }) => {
  const [values, setValues] = useState({ user: '', password: '' });
  const [errors, setErros] = useState({ user: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setErros({ user: '', password: '' });

    if (!values.user) {
      return setErros((prev) => ({ ...prev, user: 'Informe o usuário' }));
    }

    if (!values.password) {
      return setErros((prev) => ({ ...prev, password: 'Informe a senha' }));
    }

    onSubmit({ values });
  };

  return (
    <CardStyled variant="outlined">
      <Typography variant="h4">DevInHouse - Login</Typography>

      <CardContent>
        <form>
          <TextFieldStyled
            fullWidth
            id="user"
            name="user"
            label="Usuário"
            variant="outlined"
            value={values.user}
            onChange={handleChange}
            error={!!errors.user}
            helperText={!!errors.user && errors.user}
          />

          <TextFieldStyled
            fullWidth
            id="password"
            name="password"
            label="Senha"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={!!errors.password && errors.password}
          />

          <Button fullWidth variant="contained" onClick={handleSubmit}>
            Acessar
          </Button>
        </form>
      </CardContent>
    </CardStyled>
  );
};
