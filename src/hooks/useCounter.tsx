import { useState } from "react";

type useCounterProps = {
  initialValue: number;
};

const useCounter = ({ initialValue = 0 }: useCounterProps) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);

  return { count, increment, decrement };
};

export default useCounter;
