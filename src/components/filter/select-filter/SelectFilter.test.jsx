/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import SelectFilter from "components/filter/SelectFilter";

const {getByText}=screen;
describe("SelectFilter component", () => {
  it("should render the component with provided props and options", () => {
    const options = [
      { id: 1, option: "Option 1" },
      { id: 2, option: "Option 2" },
      { id: 3, option: "Option 3" },
    ];

    render(
      <SelectFilter
        title="Filter Title"
        options={options}
        changedFilter="filter"
        optionsId="id"
        optionsName="option"
        OptionsValue="option"
      />,
    );

    const filterTitle = getByText("Filter Title");
    const option1 = getByText("Option 1");
    const option2 = getByText("Option 2");
    const option3 = getByText("Option 3");

    expect(filterTitle).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });
});
