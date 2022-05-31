import { Container } from '@mui/material';
import { Calculadora } from './components/Calculadora';

// import { Login } from './components/Login';

function App() {
  // const onSubmit = ({ values }) => {
  //   console.table(values);
  // };

  return (
    <Container maxWidth="sm">
      <Calculadora />
    </Container>
  );
}

export default App;
