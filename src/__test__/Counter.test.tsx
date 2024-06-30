import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);

    const countElm = screen.getByRole("heading", { level: 1 });
    expect(countElm).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);

    const countElm = screen.getByRole("heading", { level: 1 });
    expect(countElm).toHaveTextContent("0");
  });

  it("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /Increment/i });

    await user.click(incrementButton);
    const countElm = screen.getByRole("heading", { level: 1 });
    expect(countElm).toHaveTextContent("1");
  });

  it("renders a count of 0 after clicking the decrement button", async () => {
    user.setup();
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    await user.click(decrementButton);
    const countElm = screen.getByRole("heading", { level: 1 });
    expect(countElm).toHaveTextContent("-1");
  });

  it("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const anmountInput = screen.getByRole("spinbutton");
    await user.type(anmountInput, "10");
    expect(anmountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElm = screen.getByRole("heading", { level: 1 });
    expect(countElm).toHaveTextContent("10");
  });

  it("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const anmountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(decrementButton).toHaveFocus();
    await user.tab();
    expect(anmountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });

});
