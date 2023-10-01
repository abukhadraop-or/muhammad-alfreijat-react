import React from "react";
import PropTypes from "prop-types";
import {
  SubMenu,
  SubMenuList,
  SubMenuListItem,
} from "components/navigation/navigationStyles";

/**
 * Renders a submenu component with a list of items.
 *
 * @param {Object} props - The component's props.
 * @param {Array} props.list - An array of objects with submenu item data.
 */
function Submenu({ list }) {
  return (
    <SubMenu>
      <SubMenuList>
        {list.map((item) => (
          <SubMenuListItem key={item.id}>{item.item}</SubMenuListItem>
        ))}
      </SubMenuList>
    </SubMenu>
  );
}

Submenu.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Submenu;
