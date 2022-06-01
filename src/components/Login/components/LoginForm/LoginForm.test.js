import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from './LoginForm';

const handleSubmitFn = jest.fn();
const renderComponent = () => render(<LoginForm onSubmit={handleSubmitFn} />);

describe('LoginForm component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve validar o campo de E-mail', () => {
    renderComponent();

    expect(screen.queryByText('Informe o e-mail')).not.toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /acessar/i,
    });
    userEvent.click(button);
    expect(screen.getByText('Informe o e-mail')).toBeInTheDocument();
  });

  it('Deve validar o campo de senha', () => {
    renderComponent();

    expect(screen.queryByText('Informe a senha')).not.toBeInTheDocument();

    const inputUser = screen.getByRole('textbox', {
      name: /E-mail/i,
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

    expect(handleSubmitFn).toBeCalledWith({
      values: {
        password: 'senha123',
        email: 'usuario 123',
      },
    });
  });
});
