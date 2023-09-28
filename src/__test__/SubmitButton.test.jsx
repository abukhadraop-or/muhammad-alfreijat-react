/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import SubmitButton from "components/filter/SubmitButton";
import useFilter from "hooks/useFilters";
import useMovies from "hooks/useMovies";
import fetchMovies from "utils/fetchMovies";

jest.mock("hooks/useFilters", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock("hooks/useMovies", () => {
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
  it("should call fetchMovies and setMoviesList when the button is clicked", async () => {
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

    useFilter.mockReturnValue({ filter: mockFilter });
    useMovies.mockReturnValue({ setMoviesList: jest.fn() });
    fetchMovies.mockReturnValue(mockResponse);

    render(<SubmitButton />);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    await act(async () => {
      expect(useFilter).toBeCalled();
      expect(useMovies).toBeCalled();
      expect(fetchMovies).toBeCalled();
    });
  });
});
