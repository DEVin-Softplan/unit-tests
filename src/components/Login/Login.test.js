import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './Login';

let mockHasError = false;
jest.mock('../../context/Auth', () => ({
  useAuth: () => ({ onLogin: async () => ({ hasError: mockHasError, message: 'Usuário ou senha inválida' }) }),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

function renderComponent() {
  return render(<Login />);
}

describe('Login component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Deve renderizar o formulário', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: 'DevInHouse - Login',
      })
    ).toBeInTheDocument();
  });

  it('Deve chamar função de submeter o form', async () => {
    renderComponent();

    const inputUser = screen.getByRole('textbox', {
      name: /E-mail/i,
    });
    userEvent.type(inputUser, 'usuario 123');

    const inputPass = screen.getByRole('textbox', {
      name: /senha/i,
    });
    userEvent.type(inputPass, 'senha123');

    const button = screen.getByRole('button', {
      name: /acessar/i,
    });
    userEvent.click(button);

    await waitFor(() => expect(mockNavigate).toBeCalledWith('/foruns'));
  });

  it('Deve chamar função de submeter o form retornando erro', async () => {
    mockHasError = true;
    renderComponent();

    const inputUser = screen.getByRole('textbox', {
      name: /E-mail/i,
    });
    userEvent.type(inputUser, 'usuario 123');

    const inputPass = screen.getByRole('textbox', {
      name: /senha/i,
    });
    userEvent.type(inputPass, 'senha123');

    const button = screen.getByRole('button', {
      name: /acessar/i,
    });
    userEvent.click(button);

    expect(mockNavigate).not.toBeCalled();

    expect(await screen.findByText('Usuário ou senha inválida')).toBeInTheDocument();
  });
});
