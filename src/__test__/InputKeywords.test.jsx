/* eslint-disable no-undef */
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputKeywords from "components/filter/InputKeywords";
import { act } from "react-dom/test-utils";

const { getByText } = screen;
jest.mock("hooks/useFetchKeywords", () => {
  return {
    __esModule: true,
    default: jest.fn((inputValue) => {
      return Promise.resolve([
        { id: 1, name: "Keyword 1" },
        { id: 2, name: "Keyword 2" },
        { id: 3, name: "Keyword 3" },
      ]);
    }),
  };
});

describe("InputKeywords component", () => {
  beforeEach(() => {
    render(<InputKeywords />);
  });
  it("should render without errors", () => {
    render(<InputKeywords />);
  });

  it("should search and select keywords", async () => {
    await act(async () => {
      const inputElement = document.querySelector(
        ".ant-select-selection-search input",
      );
      userEvent.type(inputElement, "Keyword 1");

      await waitFor(() => {
        const keywordOption = getByText("Keyword 1");
        expect(keywordOption).toBeInTheDocument();
      });

      userEvent.click(getByText("Keyword 1"));

      const selectedKeyword = getByText("Keyword 1");
      expect(selectedKeyword).toBeInTheDocument();
    });
  });
});
