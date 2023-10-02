import styled from "@emotion/styled";

export const NavListItem = styled.li`
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.size};
  font-weight: 600;
  padding-bottom: ${(props) => props.paddingBottom};
  white-space: nowrap;
`;

NavListItem.defaultProps = {
  color: "#fff",
  size: "1.25rem",
  paddingBottom: "0.625rem",
};

export const SideBar = styled.ul`
  background-color: rgba(3, 37, 65, 0.97);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  height: 100%;
  left: ${(props) => (props.sidebar ? "0%" : "-90%")};
  list-style-type: none;
  padding: 1.25rem;
  position: fixed;
  top: 3rem;
  transition: left 0.3s ease;
  width: 90%;
  z-index: 999;
  @media (min-width: 1024px) {
    display: none;
  }
`;
