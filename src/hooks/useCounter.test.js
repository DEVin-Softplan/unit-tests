import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter hook', () => {
  it('Deve incrementar o contador', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });

  it('não deve decrementar o contador quando for 0', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toEqual(0);
  });

  it('Deve decrementar o contador caso seja maior que 0', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    act(() => {
      result.current.increment();
    });

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toEqual(1);
  });
});
