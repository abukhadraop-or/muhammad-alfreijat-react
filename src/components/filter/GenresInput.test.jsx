/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import GenresInput from "components/filter/GenresInput";
import { genres } from "data/filtersInfo";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Testing GenresInput component.", () => {
  beforeEach(() => {
    render(<GenresInput />);
  });

  it("Renders all the genres", () => {
    genres.forEach((gen) => {
      expect(screen.getByText(gen.name)).toBeInTheDocument();
    });
  });

  it("Genres color is changed when hovering over them.", () => {
    act(() => {
      genres.forEach((gen) => {
        const genreElement = screen.getByText(gen.name);
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
        const genreElement = screen.getByText(gen.name);
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
