/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render,screen } from "@testing-library/react";
import Submenu from "components/navigation/submenu";

const { getByText } = screen;

describe("Navbar component", () => {
  beforeEach(() => {
    const testList = [
      { id: 0, item: "1" },
      { id: 1, item: "2" },
    ];
    render(<Submenu list={testList} />);
  });
  it("should render without errors", () => {
    expect(getByText("1")).toBeInTheDocument();
  });
});
