import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Menu = styled.div`
  box-sizing: content-box;
  height: 8.625rem;
  left: 10;
  overflow: visible;
  position: absolute;
  top: 3rem;
  width: 10.8125rem;
  z-index: 10002;
`;

const Ul = styled.ul`
  background-color: #fff;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  color: #212529;
  font-size: 1rem;
  font-stretch: 100%;
  font-weight: 400;
  line-height: 1.5rem;
  list-style: none;
  margin: 0;
  max-height: 24.4375rem;
  overflow: auto;
`;

const Li = styled.li`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  line-height: 1.5;
  padding: 0.3125rem 4rem 0.3125rem 1.5rem;
  position: relative;
  right: 2.5rem;
`;

/**
 * Renders a submenu component with a list of items.
 *
 * @param {Object} props - The component's props.
 * @param {Array} props.list - An array of objects with submenu item data.
 */
function Submenu({ list }) {
  return (
    <Menu>
      <Ul>
        {list.map((item) => (
          <Li key={item.id}>{item.item}</Li>
        ))}
      </Ul>
    </Menu>
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
