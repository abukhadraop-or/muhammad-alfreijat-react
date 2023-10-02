/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Sidebar from "components/navigation/sidebar";
import { listItems } from "data/navigationInfo";
import { act } from "react-dom/test-utils";

const { getByText } = screen;
describe("Navbar component", () => {
  let subListTest;
  beforeEach(() => {
    subListTest = [
      { title: "Contribution Bible", id: 4 },
      { title: "About", id: 9 },
    ];
    render(<Sidebar listItems={listItems} subList={subListTest} />);
  });
  it("should render without errors", () => {
    act(() => {
      const allLists = [...listItems, ...subListTest];
      allLists.forEach((item) => {
        const listElement = getByText(item.title);
        expect(listElement).toBeInTheDocument();
      });
    });
  });
});
