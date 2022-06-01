import { render, screen } from '@testing-library/react';

import { AuthProvider } from '../../context/Auth';
import { Login } from './Login';

const renderComponent = () =>
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

describe('Login component', () => {
  it('Deve renderizar o formulário', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: 'DevInHouse - Login',
      })
    ).toBeInTheDocument();
  });
});
