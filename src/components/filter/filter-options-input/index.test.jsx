/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import FilterOptionsInput from "components/filter/filter-options-input";
import userEvent from "@testing-library/user-event";

const { getByText, getByRole } = screen;

describe("Testing FilterOptionsInput component.", () => {
  let testOptions;

  beforeEach(() => {
    testOptions = [
      {
        id: 0,
        option: "test-1",
        value: "1",
      },
      {
        id: 1,
        option: "test-2",
        value: "2",
      },
    ];
    render(<FilterOptionsInput options={testOptions} chosenFilter="test" />);
  });
  it("Renders the passed array of options to the component.", () => {
    testOptions.forEach((option) => {
      const checkbox = getByRole("checkbox", { name: option.option });
      expect(checkbox).toBeInTheDocument();
      expect(getByText(option.option)).toBeInTheDocument();
    });
  });

  it("Checks if checkbox is checked intitally and is unchecked after clicking", () => {
    testOptions.forEach((option) => {
      const checkbox = getByRole("checkbox", { name: option.option });
      expect(checkbox).toBeChecked();
      userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  it("Checks if checkbox is unchecked after clicking", () => {
    testOptions.forEach((option) => {
      const checkbox = getByRole("checkbox", { name: option.option });
      expect(checkbox).toBeChecked();
      userEvent.click(checkbox);
      userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });
});
