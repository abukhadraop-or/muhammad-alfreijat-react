import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Menu = styled.div`
  width: 10.8125rem;
  height: 8.625rem;
  overflow: visible;
  z-index: 10002;
  position: absolute;
  top: 3rem;
  left: 10;
  box-sizing: content-box;
`;

const Ul = styled.ul`
  max-height: 24.4375rem;
  overflow: auto;
  font-size: 1rem;
  font-stretch: 100%;
  list-style: none;
  margin: 0;
  border: 1px solid #d9d9d9;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.5rem;
  color: #212529;
  background-color: #fff;
`;

const Li = styled.li`
  position: relative;
  right: 40px;
  line-height: 1.5;
  padding: 5px 64px 5px 24px;
  display: flex;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
`;
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
