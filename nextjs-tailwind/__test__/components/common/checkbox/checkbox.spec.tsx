import { render } from "@testing-library/react";
import { Checkbox } from "@/components/common";

describe("Input", () => {
  it("renders input", () => {
    const { container } = render(<Checkbox />);
    expect(container).toMatchSnapshot();
  });

  it("renders input", () => {
    const { container } = render(<Checkbox>Label</Checkbox>);
    expect(container).toMatchSnapshot();
  });
});
