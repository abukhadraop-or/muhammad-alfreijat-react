/* eslint-disable no-undef */
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import InputDate from "components/filter/InputDate";

const { getByLabelText } = screen;
describe("InputDate component", () => {
  beforeEach(() => {
    render(<InputDate />);
  });
  it("should render without errors", () => {
    render(<InputDate />);
  });
  it("Should be able to display the chosen date.", async () => {
    await act(async () => {
      const inputElement = getByLabelText("From");
      userEvent.click(inputElement);

      userEvent.type(inputElement, "2023-05-01");

      await waitFor(() => {
        expect(inputElement).toBeInTheDocument("2023-05-01");
      });
    });
  });
});
