/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputSelectFilterWrapper from "components/filter/input-select-filter-wrapper";

const { getByText, getByRole } = screen;
describe("InputSelectFilterWrapper component", () => {
  beforeEach(() => {
    render(
      <InputSelectFilterWrapper
        filterText="Filter Text"
        firstOption="filter"
        chosenFilter="option"
      >
        <div>Child Element</div>
      </InputSelectFilterWrapper>,
    );
  });
  it("should render the component with provided props", () => {
    // Check if filter text, first option, and child elements are displayed
    const filterTextElement = getByText("Filter Text");
    const firstOptionElement = getByText("filter");

    expect(filterTextElement).toBeInTheDocument();
    expect(firstOptionElement).toBeInTheDocument();
  });

  it("should toggle child elements when the checkbox is clicked", () => {
    // Check if child elements are initially displayed
    const filterTextElement = getByText("Filter Text");
    const firstOptionElement = getByText("filter");

    expect(filterTextElement).toBeInTheDocument();
    expect(firstOptionElement).toBeInTheDocument();

    // Click the checkbox to hide child elements
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
    const childElement = getByText("Child Element");
    fireEvent.click(checkbox);
    expect(childElement).not.toBeVisible();
  });
});
