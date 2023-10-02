/* eslint-disable no-undef */
import React from "react";
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Movies from "components/movie/movies";

const { getByText, getAllByAltText } = screen;

global.fetch = jest.fn();

describe("Movies component", () => {
  it("should render the Movies component with loading state", () => {
    render(<Movies />);

    act(() => {
      const skeletonImage = getAllByAltText("skeleton")[0];
      expect(skeletonImage).toBeInTheDocument();
    });
  });

  it("should render movies when data is loaded", async () => {
    let i = 0;
    const testData = Array.from({ length: 20 }, () => ({
      id: i++,
      title: "test",
      img: "testImage",
      date: "test",
      rating: "test",
    }));

    global.fetch.mockResolvedValue({
      json: async () => ({ results: testData }),
    });
    render(<Movies />);

    await waitFor(() => {
      jest.setTimeout(() => {
        expect(getByText("test")).toBeInTheDocument();
      }, 1000);
    });
  });

  it("should load more movies when the 'Load More' button is clicked", async () => {
    let i = 0;
    const testData = Array.from({ length: 20 }, () => ({
      id: i++,
      title: "test",
      img: "testImage",
      date: "test",
      rating: "test",
    }));

    global.fetch.mockResolvedValue({
      json: async () => ({ results: testData }),
    });
    render(<Movies />);
    const loadMoreButton = getByText("Load More");
    act(() => {
      fireEvent.click(loadMoreButton);
    });
    await waitFor(() => {
      jest.setTimeout(() => {
        const movie1 = getByText("test");

        expect(movie1).toBeInTheDocument();
      }, 1000);
    });
  });
});
