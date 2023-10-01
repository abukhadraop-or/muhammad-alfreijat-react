/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "components/navigation/Navbar";

const { getByText, getAllByText } = screen;
describe("Navbar component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  it("should render without errors", () => {
    render(<Navbar />);
  });

  it("Hovering over navigation parts should display a submenu", async () => {
    const moviesListItem = getAllByText("Movies")[1];
    userEvent.hover(moviesListItem);
    await waitFor(() => {
      expect(getByText("Popular")).toBeInTheDocument();
    });
  });

  it("clicking on menu icon should display sidebar", async () => {
    const svgElement = document.querySelector(".css-pskeb7 svg");
    let sidebar;
    await waitFor(() => {
      userEvent.click(svgElement);
    });
    sidebar = document.querySelector(".css-1hwr55z ul");
    expect(getComputedStyle(sidebar).left).toEqual("0%");
  });
});
