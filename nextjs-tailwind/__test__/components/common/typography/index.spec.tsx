import { render, screen } from "@testing-library/react";
import { Typography } from "@/components/common";

describe("Typography", () => {
  it("renders title", () => {
    render(<Typography.Title>heading</Typography.Title>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("renders paragraph", () => {
    const { container } = render(<Typography.Paragraph>Paragraph</Typography.Paragraph>);
    expect(container).toMatchSnapshot();
  });

  it("renders text", () => {
    const { container } = render(<Typography.Text>Text</Typography.Text>);
    expect(container).toMatchSnapshot();
  });
});
