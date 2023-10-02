/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import PanelContent from "components/filter/panel-content";

const {getByText} = screen;
jest.mock("hooks/useFeature", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("PanelContent component", () => {
  it("should render with panel open", () => {
    jest
      .requireMock("hooks/useFeature")
      .default.mockReturnValue({ panel: { chosenPanel: true } });

    render(
      <PanelContent chosenPanel="chosenPanel">
        <div>Content when panel is open</div>
      </PanelContent>,
    );

    expect(getByText("Content when panel is open")).toBeInTheDocument();
  });

  it("should render with panel closed", () => {
    jest
      .requireMock("hooks/useFeature")
      .default.mockReturnValue({ panel: { chosenPanel: false } });

    render(
      <PanelContent chosenPanel="chosenPanel">
        <div>Content when panel is closed</div>
      </PanelContent>,
    );

    expect(
      getByText("Content when panel is closed"),
    ).toBeInTheDocument();
  });
});
