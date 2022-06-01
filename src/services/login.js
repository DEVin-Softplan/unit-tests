import { ACCESS_TOKEN, USER_AUTHENTICATED } from '../constants/localStorageKeys';

export const login = async ({ email, password }) => {
  const result = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const resultFormatted = await result.json();

  if (resultFormatted.status) {
    return { hasError: true, message: resultFormatted.message };
  }

  localStorage.setItem(ACCESS_TOKEN, resultFormatted.access_token);
  localStorage.setItem(USER_AUTHENTICATED, JSON.stringify(resultFormatted.usuario));
  return { hasError: false, usuario: resultFormatted.usuario };
};
