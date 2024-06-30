import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Counter_2 from "../components/Counter_2";
import user from "@testing-library/user-event";

describe("Counter_2", () => {
  it("render correctly", () => {
    render(<Counter_2 count={0} />);

    const textElm = screen.getByText("Counter Two");
    expect(textElm).toBeInTheDocument();
  });

  it("handler are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Counter_2
        count={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
