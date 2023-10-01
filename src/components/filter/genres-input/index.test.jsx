/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import GenresInput from "components/filter/genres-input";
import { genres } from "data/filtersInfo";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const { getByText } = screen;

describe("Testing GenresInput component.", () => {
  beforeEach(() => {
    render(<GenresInput />);
  });

  it("Renders all the genres", () => {
    genres.forEach((gen) => {
      expect(getByText(gen.name)).toBeInTheDocument();
    });
  });

  it("Genres color is changed when hovering over them.", () => {
    act(() => {
      genres.forEach((gen) => {
        const genreElement = getByText(gen.name);
        userEvent.hover(genreElement);

        expect(genreElement).toHaveStyle({
          backgroundColor: "rgb(1, 180, 228)",
          color: "#fff",
        });
      });
    });
  });

  it("Genres color is changed when clicked.", async () => {
    act(() => {
      genres.forEach((gen) => {
        const genreElement = getByText(gen.name);
        userEvent.click(genreElement);

        expect(genreElement).toHaveStyle({
          backgroundColor: "rgb(1, 180, 228)",
          color: "#fff",
        });

        userEvent.click(genreElement);

        expect(genreElement).toHaveStyle({
          backgroundColor: "",
          color: "rgb(255, 255, 255)",
          borderColor: "",
        });
      });
    });
  });
});
