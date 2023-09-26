import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useDisplaySideBar from "hooks/useDisplaySidebar";

const SideBar = styled.ul`
  background-color: rgba(3, 37, 65, 0.9);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  left: ${(props) => (props.sidebar ? "0%" : "-90%")};
  list-style-type: none;
  padding: 1.25rem;
  position: absolute;
  top: 3rem;
  transition: left 0.3s ease;
  width: 90%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.size};
  font-weight: 600;
  padding-bottom: ${(props) => props.paddingBottom};
  white-space: nowrap;
`;

ListItem.defaultProps = {
  color: "#fff",
  size: "1.25rem",
  paddingBottom: "0.625rem",
};

export default function Sidebar({ listItems, subList }) {
  const { sidebar } = useDisplaySideBar();

  return (
    <SideBar sidebar={sidebar}>
      {listItems.map((item, index, list) => (
        <ListItem
          key={item.id}
          paddingBottom={list.length - 1 === index ? "1.5rem" : "0.625rem"}
        >
          {item.title}
        </ListItem>
      ))}
      {subList.map((item, index, list) => (
        <ListItem
          key={item.id}
          color="#ffffff99"
          size="1rem"
          paddingBottom={list.length - 1 === index ? "1.5rem" : "0.625rem"}
        >
          {item.title}
        </ListItem>
      ))}
      <ListItem color="#ffffff99" size="1rem">
        Login
      </ListItem>
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
