/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import SubmitButton from "components/filter/SubmitButton";
import useFilter from "hooks/useFilters";
import useMovies from "hooks/useMovies";
import useFetchMovies from "hooks/useFetchMovies";

jest.mock("hooks/useFilters", () => ({
  useFilter: jest.fn(),
}));

jest.mock("hooks/useMovies", () => ({
  useMovies: jest.fn(),
}));

jest.mock("hooks/useFetchMovies", () => ({
  useFetchMovies: jest.fn(),
}));

describe("SubmitButton component", () => {
  it("should render the component with Search button", () => {
    useFilter.useFilter.mockReturnValue({ filter: {} });
    useMovies.useMovies.mockReturnValue({ setMoviesList: jest.fn() });

    render(<SubmitButton />);

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
  });

  it("should call useFetchMovies and setMoviesList when the button is clicked", async () => {
    const mockFilter = { someFilter: "value" };
    const mockResponse = {
      results: [
        // Sample movie data
      ],
    };

    useFilter.useFilter.mockReturnValue({ filter: mockFilter });
    useMovies.useMovies.mockReturnValue({ setMoviesList: jest.fn() });
    useFetchMovies.useFetchMovies.mockResolvedValue(mockResponse);

    render(<SubmitButton />);

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    // Ensure that useFetchMovies and setMoviesList are called
    await act(async () => {
      expect(useFetchMovies.useFetchMovies).toHaveBeenCalledWith(mockFilter);
      expect(useMovies.useMovies().setMoviesList).toHaveBeenCalledWith(
        mockResponse.results,
      );
    });
  });

  it("should disable the button when no filters are applied", () => {
    useFilter.useFilter.mockReturnValue({ filter: {} });
    useMovies.useMovies.mockReturnValue({ setMoviesList: jest.fn() });

    render(<SubmitButton />);

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeDisabled();
  });
});
