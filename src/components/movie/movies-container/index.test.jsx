/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import MoviesContainer from "components/movie/movies-container";

describe("MoviesContainer component", () => {
  it("should render without errors", () => {
    render(<MoviesContainer />);
  });
});
