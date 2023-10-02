/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import SubmitButton from "components/filter/submit-button";
import fetchMovies from "utils/fetchMovies";
import useFeatures from "hooks/useFeature";

jest.mock("hooks/useFeature", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock("utils/fetchMovies", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("SubmitButton component", () => {
  it("should call fetchMovies when the button is clicked", async () => {
    const mockFilter = { someFilter: "value" };
    const mockResponse = {
      results: [
        {
          title: "test",
          img: "test",
          date: "test",
          rating: "test",
        },
        {
          title: "test",
          img: "test",
          date: "test",
          rating: "test",
        },
      ],
    };

    useFeatures.mockReturnValue({ filter: mockFilter, setMoviesList: jest.fn });
    fetchMovies.mockReturnValue(mockResponse);

    render(<SubmitButton />);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    await act(async () => {
      expect(useFeatures).toBeCalled();
      expect(fetchMovies).toBeCalled();
    });
  });
});
