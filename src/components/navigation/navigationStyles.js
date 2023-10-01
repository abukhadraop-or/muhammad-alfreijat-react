import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  align-content: center;
  align-items: center;
  background-image: radial-gradient(
    at 30%top,
    #031d33 0%,
    rgba(3, 37, 65, 1) 70%
  );
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  padding: 0;
  width: 100vw;

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const FooterContainer = styled.div`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9em;
  justify-content: space-between;
  padding-bottom: 5rem;
  padding-top: 5rem;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FooterLogoContainer = styled.div`
  box-sizing: border-box;
  margin-right: 2.5rem;
  min-width: 0;
  position: relative;
  right: 0;
  text-align: right;
  top: -2.25rem;
`;

export const FooterLogo = styled.img`
  box-sizing: border-box;
  height: 5.875rem;
  outline: 0;
  overflow: clip;
  position: absolute;
  right: 0;
  top: 0;
  width: 8.125rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterSubTitle = styled.a`
  background-color: #fff;
  border-color: #fff;
  border-radius: 0.3125rem;
  border: 0.125rem solid #fff;
  box-sizing: border-box;
  color: #01b4e4;
  display: inline-block;
  font-size: 1.3em;
  font-weight: 700;
  padding: 0.5rem 1rem;
  position: relative;
  text-transform: uppercase;
  top: 8.75rem;
  white-space: normal;
  word-wrap: break-word;

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const FooterList = styled.div`
  box-sizing: border-box;
  margin-right: 2.5rem;
`;

export const FooterListTitle = styled.h3`
  box-sizing: border-box;
  color: #fff;
  font-size: 1.4em;
  font-weight: 700;
  line-height: 1.4em;
  margin: 0 0 0.25rem;
  padding: 0;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const FooterListContainer = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const FooterListItem = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  line-height: 1.6em;
  margin: 0;
  max-width: 16.25rem;
  overflow: hidden;
  padding: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

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

export const SubMenu = styled.div`
  box-sizing: content-box;
  height: 8.625rem;
  left: 10;
  overflow: visible;
  position: absolute;
  top: 3rem;
  width: 10.8125rem;
  z-index: 10002;
`;

export const SubMenuList = styled.ul`
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

export const SubMenuListItem = styled.li`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  line-height: 1.5;
  padding: 0.3125rem 4rem 0.3125rem 1.5rem;
  position: relative;
  right: 2.5rem;
`;
