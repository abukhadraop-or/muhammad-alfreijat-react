/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import NoItems from "components/movie/NoItems";

describe("NoItems component", () => {
  it("should render without errors", () => {
    render(<NoItems />);
  });
});
