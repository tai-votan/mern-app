import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "@/pages/admin";

describe("Homepage", () => {
  it("renders page", () => {
    const { container } = render(<Admin />);
    expect(container).toMatchSnapshot();
  });

  it("click button submit", () => {
    render(<Admin />);
    expect(screen.getByText("common:login.password")).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("common:login.username")).toBeInTheDocument();
  });
});
