import { render } from "@testing-library/react";
import { Button } from "@/components/common";

describe("Button", () => {
  it("renders button", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it("button is disabled", () => {
    const { container } = render(<Button disabled />);
    expect(container).toMatchSnapshot();
  });

  it("button is danger", () => {
    const { container } = render(<Button danger />);
    expect(container).toMatchSnapshot();
  });

  it("button is primary disabled", () => {
    const { container } = render(<Button type="primary" disabled />);
    expect(container).toMatchSnapshot();
  });

  it("button is primary", () => {
    const { container } = render(<Button type="primary" />);
    expect(container).toMatchSnapshot();
  });

  it("button is link", () => {
    const { container } = render(<Button type="link" />);
    expect(container).toMatchSnapshot();
  });
});
