/* eslint-disable no-undef */
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputKeywords from "components/filter/InputKeywords";
import { act } from "react-dom/test-utils";

const { getByText } = screen;

global.fetch = jest.fn();

describe("InputKeywords component", () => {
  it("should render without errors", () => {
    render(<InputKeywords />);
  });

  it("should search and select keywords", async () => {
    global.fetch.mockResolvedValue({
      json: async () => ({
        results: [
          { id: 0, name: "keyword1" },
          { id: 1, name: "keyword2" },
          { id: 2, name: "keyword3" },
        ],
      }),
    });
    render(<InputKeywords />);
    const inputElement = screen.getByRole("combobox");
    expect(inputElement).toHaveAttribute("readonly");

    await waitFor(() => {
      userEvent.click(inputElement);
    });
    await act(async () => {
      userEvent.type(inputElement, "Keyw");
    });

    await waitFor(() => {
      expect(inputElement.value).toBe("Keyw");
    });

    await waitFor(() => {
      jest.setTimeout(() => {
        const keywordOption = getByText("Keyword 1");
        expect(keywordOption).toBeInTheDocument();
        act(async () => {
          userEvent.click(getByText("Keyword 1"));
        });
        const selectedKeyword = getByText("Keyword 1");
        expect(selectedKeyword).toBeInTheDocument();
      }, 1000);
    });
  });
});
