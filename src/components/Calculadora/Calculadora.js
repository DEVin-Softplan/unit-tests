import { Grid } from '@mui/material';
import { listaNumeros } from '../constants/calculadora';
import { ButtonStyled, CardStyled, DisplayStyled } from './Calculadora.styles';

export const Calculadora = () => {
  return (
    <CardStyled>
      <DisplayStyled>teste</DisplayStyled>

      <Grid container spacing={0.5}>
        {listaNumeros.map((op) => (
          <Grid key={op.texto} item xs={3}>
            <ButtonStyled fullWidth variant="contained" color={op.cor}>
              {op.texto}
            </ButtonStyled>
          </Grid>
        ))}
      </Grid>
    </CardStyled>
  );
};
