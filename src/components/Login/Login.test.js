import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './Login';

const handleSubmitFn = jest.fn();
const renderComponent = () => render(<Login onSubmit={handleSubmitFn} />);

describe('Login component', () => {
  beforeEach(() => {
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

  it('Deve validar o campo de usuário', () => {
    renderComponent();

    expect(screen.queryByText('Informe o usuário')).not.toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /acessar/i,
    });
    userEvent.click(button);
    expect(screen.getByText('Informe o usuário')).toBeInTheDocument();
  });

  it('Deve validar o campo de senha', () => {
    renderComponent();

    expect(screen.queryByText('Informe a senha')).not.toBeInTheDocument();

    const inputUser = screen.getByRole('textbox', {
      name: /usuário/i,
    });
    userEvent.type(inputUser, 'usuario 123');

    const button = screen.getByRole('button', {
      name: /acessar/i,
    });
    userEvent.click(button);
    expect(screen.getByText('Informe a senha')).toBeInTheDocument();
  });

  it('Deve chamar a função de submit', () => {
    renderComponent();

    const inputUser = screen.getByRole('textbox', {
      name: /usuário/i,
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

    expect(handleSubmitFn).toBeCalledWith({
      values: {
        password: 'senha123',
        user: 'usuario 123',
      },
    });
  });
});
