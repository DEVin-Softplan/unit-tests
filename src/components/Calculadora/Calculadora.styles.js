import { Card, styled, Button } from '@mui/material';

export const CardStyled = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15%',
});

export const DisplayStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '3em',
  justifyContent: 'flex-end',
  alignItems: 'center',
  letterSpacing: '1px',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: '0.5em',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '4px',
}));

export const ButtonStyled = styled(Button)({
  borderRadius: 0,
  height: '5em',
});
