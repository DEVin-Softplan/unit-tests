import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    }
  }, [count]);

  return { count, increment, decrement };
};
