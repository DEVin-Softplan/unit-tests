import { useState } from 'react';

import { Button } from '@mui/material';

import { TextFieldStyled } from './LoginForm.styles';

export const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErros] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setErros({ email: '', password: '' });

    if (!values.email) {
      return setErros((prev) => ({ ...prev, email: 'Informe o e-mail' }));
    }

    if (!values.password) {
      return setErros((prev) => ({ ...prev, password: 'Informe a senha' }));
    }

    onSubmit({ values });
  };

  return (
    <form>
      <TextFieldStyled
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={!!errors.email && errors.email}
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
  );
};
