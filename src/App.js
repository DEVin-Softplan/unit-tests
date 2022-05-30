import { Container } from '@mui/material';

import { Login } from './components/Login';

function App() {
  const onSubmit = ({ values }) => {
    console.table(values);
  };

  return (
    <Container maxWidth="sm">
      <Login onSubmit={onSubmit} />
    </Container>
  );
}

export default App;
