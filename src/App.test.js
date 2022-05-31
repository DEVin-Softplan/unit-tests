import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.logTestingPlaygroundURL();
  const linkElement = screen.getByText(/DevInHouse - Login/i);
  expect(linkElement).toBeInTheDocument();
});
