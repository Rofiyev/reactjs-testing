import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Greet from "../components/Greet";

describe.only("Greet component test", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);

    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });

  describe("Nested Greet component test", () => {
    test("Greet renders with a name", () => {
      render(<Greet name="Dilshod" />);

      const text = screen.getByText(/Dilshod/i);
      expect(text).toBeInTheDocument();
    });
  });
});
