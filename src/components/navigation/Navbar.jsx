import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu } from "react-feather";
import logo from "assets/logo.svg";
import desktopLogo from "assets/desktopLogo.svg";
import profile from "assets/profile.svg";
import search from "assets/search.svg";
import plus from "assets/plus.svg";
import Sidebar, { ListItem } from "components/navigation/Sidebar";
import useDisplaySideBar from "hooks/useDisplaySidebar";
import Submenu from "components/navigation/Submenu";
import { listItems, moreNavigation, subList } from "data/navigationInfo";

const Nav = styled.div`
  align-items: center;
  background-color: #032541;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    justify-content: space-around;
    gap: 4%;
  }
`;

const List = styled.ul`
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

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
`;

const DesktopProfileTab = styled.div`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Icon = styled.img`
  filter: invert(${(props) => props.invert});
  height: ${(props) => props.height};
  left: 43.5%;
  position: ${(props) => props.position};
  width: ${(props) => props.width};

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

Icon.defaultProps = {
  invert: "0",
  height: "2.5rem",
  position: "static",
  width: "3.4375rem",
};

const DesktopIcon = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  @media (max-width: 1024px) {
    display: none;
  }
`;

DesktopIcon.defaultProps = {
  invert: "0",
};

const LanguageButton = styled.div`
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
  padding: 3px 5px;
  transition: linear 0.1s;
  width: 1.75rem;
  &:hover {
    background-color: #fff;
    color: #032541;
  }
`;

function Navbar() {
  const { sidebar, setSidebar } = useDisplaySideBar();
  const [showSubLists, setShowSubLists] = useState([
    false,
    false,
    false,
    false,
  ]);

  const openSubMenu = (index) => {
    const newSubList = [...showSubLists];
    if (showSubLists[index]) {
      newSubList[index] = !newSubList[index];
      setShowSubLists(newSubList);
      return;
    }
    for (let i = 0; i < newSubList.length; i += 1) {
      newSubList[i] = false;
    }
    newSubList[index] = !newSubList[index];
    setShowSubLists(newSubList);
  };

  const closeSubMenu = (index) => {
    const newSubList = [...showSubLists];
    if (showSubLists[index]) {
      newSubList[index] = !newSubList[index];
      setShowSubLists(newSubList);
    }
  };

  return (
    <Nav>
      <Sidebar listItems={listItems} subList={subList} />
      <Container style={{ gap: ".0625rem" }}>
        <MenuContainer>
          <Menu
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </MenuContainer>
        <Icon src={logo} alt="Logo" position="absolute" />
        <DesktopIcon
          src={desktopLogo}
          alt="Logo"
          height="1.25rem"
          width="9.625rem"
        />
        <List>
          {listItems.map((item, index) => (
            <ListItem
              key={item.id}
              size="1rem"
              paddingBottom="0"
              onMouseEnter={() => {
                openSubMenu(index);
              }}
            >
              {item.title}

              {showSubLists[index] && (
                <div
                  style={{
                    height: "300px",
                    width: "100px",
                    top: "0",
                    position: "absolute",
                    background: "trasparent",
                  }}
                  onMouseLeave={() => {
                    closeSubMenu(index);
                  }}
                >
                  <Submenu list={item.subMenu} />
                </div>
              )}
            </ListItem>
          ))}

          <ListItem
            size="1rem"
            paddingBottom="0"
            onMouseEnter={() => {
              openSubMenu(3);
            }}
          >
            more
            {showSubLists[3] && (
              <div
                style={{
                  height: "300px",
                  width: "100px",
                  top: "0",
                  position: "absolute",
                  background: "trasparent",
                }}
                onMouseLeave={() => {
                  closeSubMenu(3);
                }}
              >
                <Submenu list={moreNavigation} />
              </div>
            )}
          </ListItem>
        </List>
      </Container>
      <Container style={{ gap: "1.5rem" }}>
        <Icon src={profile} width="1.375rem" height="1.375rem" invert="1" />
        <Icon src={search} width="1.5rem" height="1.5rem" />
        <DesktopIcon
          src={plus}
          width="1.375rem"
          height="1.375rem"
          style={{ marginBottom: "0.3125rem" }}
        />
        <DesktopProfileTab>
          <LanguageButton>EN</LanguageButton>
        </DesktopProfileTab>

        <DesktopProfileTab>Login</DesktopProfileTab>
        <DesktopProfileTab>Join TMDB</DesktopProfileTab>
        <DesktopIcon src={search} width="1.8125rem" height="1.8125rem" />
      </Container>
    </Nav>
  );
}

export default Navbar;
