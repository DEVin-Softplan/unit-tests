import { login } from './login';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          access_token: 'token123',
          usuario: {
            id: 1,
            nome: 'Thais',
          },
        }),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('login service', () => {
  it('Deve retornar os dados com sucesso', async () => {
    const result = await login({ email: 'thais@email.com', password: '123' });

    expect(result).toEqual({ hasError: false, usuario: { id: 1, nome: 'Thais' } });
  });
});
