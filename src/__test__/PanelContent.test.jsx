/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import PanelContent from "components/filter/PanelContent";
import useOpenPanel from "hooks/useOpenPanel";

const { getByText, queryByText } = screen;
jest.mock("jotai", () => {
  const actual = jest.requireActual("jotai");
  const customAtom = actual.atom({
    somePanel: false,
    watch: false,
    filter: false,
  });

  return {
    ...actual,
    atom: jest.fn(() => customAtom),
  };
});

describe("PanelContent component", () => {
  it("should render the content when the panel is open", () => {
    render(
      <PanelContent chosenPanel="somePanel">
        <div>Panel Content</div>
      </PanelContent>,
    );

    const panelContent = getByText("Panel Content");
    expect(panelContent).toBeInTheDocument();
  });

  it("should not render the content when the panel is closed", () => {
    render(
      <PanelContent chosenPanel="somePanel">
        <div>Panel Content</div>
      </PanelContent>,
    );

    const panelContent = queryByText("Panel Content");
    expect(panelContent).not.toBeInTheDocument();
  });
});
