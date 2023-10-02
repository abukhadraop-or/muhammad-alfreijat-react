/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "components/movie/movie-card";

const { getByText, getByAltText } = screen;
describe("MovieCard component", () => {
  it("should render MovieCard with provided props", () => {
    const sampleData = {
      img: "sample-image-url.jpg",
      rating: 7.5,
      title: "Sample Movie",
      date: "2023-09-27",
    };

    render(
      <MovieCard
        rating={sampleData.rating}
        title={sampleData.title}
        date={sampleData.date}
      />,
    );

    const titleElement = getByText(sampleData.title);
    const dateElement = getByText("Sep 27, 2023");
    const ratingElement = getByText("75%");

    // Assertions
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  it("should render MovieCard with default props when not provided", () => {
    // Render the MovieCard with no props
    render(<MovieCard />);

    // Check if the MovieCard's default image is displayed
    const defaultImgElement = getByAltText("skeleton");

    // Assertions for default props
    expect(defaultImgElement).toBeInTheDocument();
  });
});
