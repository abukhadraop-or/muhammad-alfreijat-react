/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import MoviesContainer from "components/movie/MoviesContainer";

describe("MoviesContainer component", () => {
  it("should render without errors", () => {
    render(<MoviesContainer />);
  });
});
