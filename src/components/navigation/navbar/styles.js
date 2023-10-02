import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  align-items: center;
  background-color: #032541;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: fixed;
  width: 100%;
  z-index: 999;

  @media (min-width: 1024px) {
    justify-content: space-around;
    gap: 4%;
    position: static;
  }
`;

export const NavbarList = styled.ul`
  align-items: center;
  background-color: rgba(3, 37, 65, 0.9);
  box-sizing: border-box;
  display: flex;
  gap: 1.8rem;
  height: 100%;
  justify-content: center;
  list-style-type: none;
  padding: 1.25rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavbarIconContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
`;

export const DesktopProfileTab = styled.div`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavbarIcon = styled.img`
  filter: invert(${(props) => props.invert});
  height: ${(props) => props.height};
  left: 43.5%;
  position: ${(props) => props.position};
  width: ${(props) => props.width};

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

NavbarIcon.defaultProps = {
  invert: "0",
  height: "2.5rem",
  position: "static",
  width: "3.4375rem",
};

export const NavbarDesktopIcon = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LanguageButton = styled.div`
  align-items: center;
  border-radius: 3px;
  border: 1px solid #fff;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 0.9em;
  font-weight: 600;
  justify-content: center;
  height: 1.625rem;
  padding: 0.1875rem 0.3125rem;
  transition: linear 0.1s;
  width: 1.75rem;
  &:hover {
    background-color: #fff;
    color: #032541;
  }
`;

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
