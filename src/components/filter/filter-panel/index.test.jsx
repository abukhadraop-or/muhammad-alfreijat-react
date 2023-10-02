/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import FilterPanel from "components/filter/filter-panel";

const { getByText } = screen;
describe("Testing FilterPanel component.", () => {
  let testTitle;
  let testChildren;
  let testChosenPanel;

  beforeEach(() => {
    testTitle = "Test Title";
    testChildren = <div>Test Children</div>;
    testChosenPanel = "testChosenPanel";

    render(
      <FilterPanel title={testTitle} chosenPanel={testChosenPanel}>
        {testChildren}
      </FilterPanel>,
    );
  });

  it("Renders the title correctly", () => {
    const titleElement = getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it("Renders the children correctly", () => {
    const childrenElement = getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });
});
