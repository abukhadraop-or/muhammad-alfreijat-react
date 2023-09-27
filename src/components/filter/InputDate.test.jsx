/* eslint-disable no-undef */
import * as React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";
import InputDate from "components/filter/InputDate";

describe("InputDate component", () => {
  it("should render without errors", () => {
    render(<InputDate />);
  });
});
