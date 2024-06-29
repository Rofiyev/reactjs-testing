import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";

describe("Skills", () => {
  const skillsData: string[] = ["HTML", "CSS", "JavaScript"];

  it("Skills rendres correctly", () => {
    render(<Skills skills={skillsData} />);

    const listItem = screen.getByRole("list");
    expect(listItem).toBeInTheDocument();
  });

  it("renders a list of Skills", () => {
    render(<Skills skills={skillsData} />);
    const listItemElm = screen.getAllByRole("listitem");
    expect(listItemElm).toHaveLength(skillsData.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skillsData} />);
    const loginButton = screen.getByRole("button", { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skillsData} />);

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /Start learning/i,
      },
      { timeout: 2000 }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
