import { renderHook } from '@testing-library/react';
import { AuthContext } from './AuthContext';

import { useAuth } from './useAuth';

const wrapper = ({ children }) => <AuthContext.Provider value={{ test: 'test' }}>{children}</AuthContext.Provider>;

describe('useAuth hook', () => {
  it('Deve retornar o valor do contexto', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current).toEqual({ test: 'test' });
  });

  it('Deve retornar erro ao utilizar sem provider', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.message).toEqual('useAuth deve estar envolvido pelo AuthProvider.');
  });
});
