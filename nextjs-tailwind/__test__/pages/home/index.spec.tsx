import { render } from "@testing-library/react";
import Home from "@/pages/index";

describe("Homepage", () => {
  it("renders page", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
