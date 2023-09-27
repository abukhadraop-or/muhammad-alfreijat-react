/* eslint-disable no-undef */
import React from "react";
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Movies from "components/movie/Movies";

const { getByText, getAllByAltText } = screen;
describe("Movies component", () => {
  it("should render the Movies component with loading state", () => {
    render(<Movies />);

    // Check if loadingMovies skeleton data is displayed
    const skeletonImage = getAllByAltText("skeleton")[0];
    expect(skeletonImage).toBeInTheDocument();
  });

  it("should render movies when data is loaded", async () => {
    render(<Movies />);

    await waitFor(() => {
      const movie1 = getByText("Retribution");
      const loadMoreButton = getByText("Load More");

      expect(movie1).toBeInTheDocument();
      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  it("should load more movies when the 'Load More' button is clicked", async () => {
    render(<Movies />);
    const loadMoreButton = getByText("Load More");

    // Click the "Load More" button
    act(() => {
      fireEvent.click(loadMoreButton);
    });
    await waitFor(() => {
      const movie1 = getByText("Gran Turismo");

      expect(movie1).toBeInTheDocument();
    });
  });
});
