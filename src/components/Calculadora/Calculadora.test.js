import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Calculadora } from './Calculadora';

const renderComponent = () => render(<Calculadora />);

describe('Calculadora component', () => {
  it('Deve somar dois números', () => {
    renderComponent();

    const button1 = screen.getByRole('button', { name: '9' });
    const buttonSoma = screen.getByRole('button', { name: '+' });
    const button2 = screen.getByRole('button', { name: '2' });
    const buttonCalcular = screen.getByRole('button', { name: 'Calcular' });

    userEvent.click(button1);
    userEvent.click(buttonSoma);
    userEvent.click(button2);
    userEvent.click(buttonCalcular);

    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('Deve subtrair dois números', () => {
    renderComponent();

    const button1 = screen.getByRole('button', { name: '1' });
    const buttonSub = screen.getByRole('button', { name: '-' });
    const button2 = screen.getByRole('button', { name: '2' });
    const buttonCalcular = screen.getByRole('button', { name: 'Calcular' });

    userEvent.click(button1);
    userEvent.click(buttonSub);
    userEvent.click(button2);
    userEvent.click(buttonCalcular);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('Deve multiplicar dois números', () => {
    renderComponent();

    const button1 = screen.getByRole('button', { name: '9' });
    const buttonMult = screen.getByRole('button', { name: '*' });
    const button2 = screen.getByRole('button', { name: '2' });
    const buttonCalcular = screen.getByRole('button', { name: 'Calcular' });

    userEvent.click(button1);
    userEvent.click(buttonMult);
    userEvent.click(button2);
    userEvent.click(buttonCalcular);

    expect(screen.getByText('18')).toBeInTheDocument();
  });

  it('Deve dividir dois números', () => {
    renderComponent();

    const button1 = screen.getByRole('button', { name: '9' });
    const buttonDiv = screen.getByRole('button', { name: '/' });
    const button2 = screen.getByRole('button', { name: '3' });
    const buttonCalcular = screen.getByRole('button', { name: 'Calcular' });

    userEvent.click(button1);
    userEvent.click(buttonDiv);
    userEvent.click(button2);
    userEvent.click(buttonCalcular);

    expect(screen.getAllByText('3')).toHaveLength(2);
  });

  it('Deve limpar o display', () => {
    renderComponent();

    const button1 = screen.getByRole('button', { name: '9' });
    const buttonLimpar = screen.getByRole('button', { name: 'C' });

    expect(screen.getAllByText('9')).toHaveLength(1);

    userEvent.click(button1);

    expect(screen.getAllByText('9')).toHaveLength(2);

    userEvent.click(buttonLimpar);

    expect(screen.getAllByText('9')).toHaveLength(1);
  });
});
