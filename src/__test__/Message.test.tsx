import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Message from "../components/Message";
import user from "@testing-library/user-event";

describe("Message", () => {
  it("renders correctly", () => {
    render(<Message value="" />);

    const textareaElm = screen.getByRole("textbox");
    expect(textareaElm).toBeInTheDocument();
  });

  it("Textarea clear", async () => {
    user.setup();
    render(<Message value="Assalomu alaykum" />);

    await user.clear(screen.getByRole("textbox"));
    const textareaElm = screen.getByRole("textbox");
    expect(textareaElm).toHaveValue("");
  });
});
