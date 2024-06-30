import { FC } from "react";

type Counter_2Props = {
  count: number;
  increment?: () => void;
  decrement?: () => void;
};

const Counter_2: FC<Counter_2Props> = ({ count, decrement, increment }) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {increment && <button onClick={increment}>Increment</button>}
      {decrement && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};

export default Counter_2;
