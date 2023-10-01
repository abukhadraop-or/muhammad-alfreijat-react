import React, { useState } from "react";
import { Menu } from "react-feather";
import logo from "assets/logo.svg";
import desktopLogo from "assets/desktopLogo.svg";
import profile from "assets/profile.svg";
import search from "assets/search.svg";
import plus from "assets/plus.svg";
import Sidebar from "components/navigation/sidebar";
import Submenu from "components/navigation/submenu";
import { listItems, moreNavigation, subList } from "data/navigationInfo";
import {
  NavbarContainer,
  NavbarList,
  NavbarIconContainer,
  DesktopProfileTab,
  NavbarIcon,
  MenuContainer,
  NavbarDesktopIcon,
  LanguageButton,
  NavListItem,
} from "components/navigation/navbar/styles";
import useFeatures from "hooks/useFeature";

/**
 * Renders the Navbar component with the website's navigation and menu.
 *
 */
function Navbar() {
  const { sidebar, setSidebar } = useFeatures();
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
    <NavbarContainer>
      <Sidebar listItems={listItems} subList={subList} />
      <NavbarIconContainer style={{ gap: ".0625rem" }}>
        <MenuContainer>
          <Menu
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </MenuContainer>
        <NavbarIcon src={logo} alt="Logo" position="absolute" />
        <NavbarDesktopIcon
          src={desktopLogo}
          alt="Logo"
          height="1.25rem"
          width="9.625rem"
        />
        <NavbarList>
          {listItems.map((item, index) => (
            <NavListItem
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
            </NavListItem>
          ))}

          <NavListItem
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
          </NavListItem>
        </NavbarList>
      </NavbarIconContainer>
      <NavbarIconContainer style={{ gap: "1.5rem" }}>
        <NavbarIcon
          src={profile}
          width="1.375rem"
          height="1.375rem"
          invert="1"
        />
        <NavbarIcon src={search} width="1.5rem" height="1.5rem" />
        <NavbarDesktopIcon
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
        <NavbarDesktopIcon src={search} width="1.8125rem" height="1.8125rem" />
      </NavbarIconContainer>
    </NavbarContainer>
  );
}

export default Navbar;
