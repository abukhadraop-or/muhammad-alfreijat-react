import React from "react";
import PropTypes from "prop-types";
import { NavListItem, SideBar } from "components/navigation/sidebar/styles";
import useFeatures from "hooks/useFeature";

/**
 * Renders a sidebar component with a list of navigation items that only appears when screen width is bellow 1024px.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Array} props.listItems - An array of objects with navigation item data.
 * @param {Array} props.subList - An array of objects with sub-navigation item data.
 */
export default function Sidebar({ listItems, subList }) {
  const { sidebar } = useFeatures();

  return (
    <SideBar sidebar={sidebar}>
      {listItems.map((item, index, list) => (
        <NavListItem
          key={item.id}
          paddingBottom={list.length - 1 === index ? "1.5rem" : "0.625rem"}
        >
          {item.title}
        </NavListItem>
      ))}
      {subList.map((item, index, list) => (
        <NavListItem
          key={item.id}
          color="#ffffff99"
          size="1rem"
          paddingBottom={list.length - 1 === index ? "1.5rem" : "0.625rem"}
        >
          {item.title}
        </NavListItem>
      ))}
      <NavListItem color="#ffffff99" size="1rem">
        Login
      </NavListItem>
    </SideBar>
  );
}

Sidebar.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  subList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
