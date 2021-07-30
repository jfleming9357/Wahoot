import { render, screen } from "@testing-library/react";
import { WelcomeText } from "../components/WelcomeText";

describe("Testing React Welcome Component", () => {
  it("Should render 'Welcome NextJS'", () => {
    render(<WelcomeText />);
    const welcomeTxt = screen.getByText("Welcome to NextJS");
    expect(welcomeTxt).toBeInTheDocument();
  });
});
