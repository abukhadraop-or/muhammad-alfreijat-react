/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import FiltersContainer from "components/filter/FiltersContainer";

describe("Testing FiltersContainer component", () => {
  it("Renders the component without errors", () => {
    render(<FiltersContainer />);
    // Check if the component renders without errors.
    expect(screen.getByText("Sort")).toBeInTheDocument();
  });
});
