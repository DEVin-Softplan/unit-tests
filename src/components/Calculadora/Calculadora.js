import { useMemo, useState } from 'react';

import * as math from 'mathjs';

import { Grid } from '@mui/material';

import { listaNumeros, operacoes } from '../constants/calculadora';
import { ButtonStyled, CardStyled, DisplayStyled } from './Calculadora.styles';

export const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('');

  const ehOperacao = useMemo(() => {
    return operacoes.includes(displayValue[displayValue.length - 1]);
  }, [displayValue]);

  const handleClickButton = (value) => {
    if (value === 'C') {
      return setDisplayValue('');
    }

    if (operacoes.includes(value) && (displayValue === '' || ehOperacao)) {
      return;
    }

    setDisplayValue((prev) => `${prev}${value}`);
  };

  const handleClickCalcular = () => {
    if (displayValue !== '' && !ehOperacao) {
      setDisplayValue(math.evaluate(displayValue));
    }
  };

  return (
    <CardStyled>
      <DisplayStyled>{displayValue}</DisplayStyled>

      <Grid container spacing={0.5}>
        {listaNumeros.map((op) => (
          <Grid key={op.texto} item xs={3}>
            <ButtonStyled fullWidth variant="contained" color={op.cor} onClick={() => handleClickButton(op.texto)}>
              {op.texto}
            </ButtonStyled>
          </Grid>
        ))}

        <Grid item xs={12}>
          <ButtonStyled fullWidth variant="contained" color="primary" onClick={handleClickCalcular}>
            Calcular
          </ButtonStyled>
        </Grid>
      </Grid>
    </CardStyled>
  );
};
