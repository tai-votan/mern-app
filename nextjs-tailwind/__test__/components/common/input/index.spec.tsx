import { render } from "@testing-library/react";
import { Input } from "@/components/common";

describe("Input", () => {
  it("renders input", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it("renders input with class mb-4", () => {
    const { container } = render(<Input className="mb-4" />);
    expect(container.firstChild).toHaveClass("mb-4");
  });
});
