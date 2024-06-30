import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useCounter from "../hooks/useCounter";

describe("useCounter hook", () => {
  it("should render the initialValue count", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.increment();
      
    });

    expect(result.current.count).toBe(6);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(5);
  });
});
