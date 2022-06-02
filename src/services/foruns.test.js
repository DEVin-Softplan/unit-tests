import { ACCESS_TOKEN } from '../constants/localStorageKeys';
import { getForuns } from './foruns';

describe('foruns service', () => {
  it('Deve retornar a lista de itens vazia', async () => {
    localStorage.setItem(ACCESS_TOKEN, '123');
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve([]) }));

    const result = await getForuns();

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:3001/foruns', {
      headers: { map: { authorization: 'Bearer 123', 'content-type': 'application/json' } },
      method: 'GET',
    });

    expect(result).toEqual([]);
  });

  it('Deve retornar a lista de itens', async () => {
    const array = [{ id: 1 }];
    localStorage.setItem(ACCESS_TOKEN, '123');

    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(array) }));

    const result = await getForuns();

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:3001/foruns', {
      headers: { map: { authorization: 'Bearer 123', 'content-type': 'application/json' } },
      method: 'GET',
    });

    expect(result).toEqual(array);
  });
});
