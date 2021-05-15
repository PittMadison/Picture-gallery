import { useCallback, useState } from 'react';

export const useBooleanState = (initial) => {
  const [value, setValue] = useState(initial);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const setToggle = useCallback(() => setValue((value) => !value), []);

  return [value, setTrue, setFalse, setToggle];
};
