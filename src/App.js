import { Container } from '@mui/material';
import { AuthProvider } from './context/Auth/AuthProvider';
import { Router } from './Routes/Router';

function App() {
  return (
    <Container maxWidth="sm">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Container>
  );
}

export default App;
