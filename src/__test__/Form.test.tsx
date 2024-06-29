import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Form from "../components/Form";

describe("Form", () => {
  it("renders correctly", () => {
    render(<Form />);

    const headingElm1 = screen.getByRole("heading", { name: /form/i });
    expect(headingElm1).toBeInTheDocument();

    const headingElm2 = screen.getByRole("heading", { name: /title/i });
    expect(headingElm2).toBeInTheDocument();

    const headingElm3 = screen.getByRole("heading", {
      level: 3,
      name: /hello/i,
    });
    expect(headingElm3).toBeInTheDocument();

    const spanElm = screen.getByTitle("greeting");
    expect(spanElm).toBeInTheDocument();

    const nameElm = screen.getByRole("textbox", { name: "Name" });
    expect(nameElm).toBeInTheDocument();

    const nameELm2 = screen.getByLabelText(
      "Name"
      //  {selector: 'input'}
    );
    expect(nameELm2).toBeInTheDocument();

    const bioElm = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElm).toBeInTheDocument();

    const jobLocationElm = screen.getByRole("combobox");
    expect(jobLocationElm).toBeInTheDocument();

    const termsElm = screen.getByRole("checkbox");
    expect(termsElm).toBeInTheDocument();

    const submitButtonElm = screen.getByRole("button");
    expect(submitButtonElm).toBeInTheDocument();
  });
});

/**
 * Selectors:
 * ==> getByRole(), getByLabelText(), getByText(), getByPlaceholderText(), getByDisplayValue(), getByAltText(), getByTitle(), getByTestId(),
 */
