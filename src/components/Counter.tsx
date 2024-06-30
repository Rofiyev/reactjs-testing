import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAmount(parseInt(e.target.value))
        }
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
