import { ACCESS_TOKEN } from '../constants/localStorageKeys';

export const getForuns = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_URL}/foruns`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    }),
  });

  return await result.json();
};
