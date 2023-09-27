import React from "react";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import { footerHeaders, footerElements } from "data/navigationInfo";

const FooterWrapper = styled.div`
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

const Nav = styled.div`
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

const LogoContainer = styled.div`
  box-sizing: border-box;
  margin-right: 2.5rem;
  min-width: 0;
  position: relative;
  right: 0;
  text-align: right;
  top: -2.25rem;
`;

const Logo = styled.img`
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

const Join = styled.a`
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

const Category = styled.div`
  box-sizing: border-box;
  margin-right: 2.5rem;
`;

const H3 = styled.h3`
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

const Ul = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
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
/**
 * Renders list that has links in the footer.
 *
 */
const renderList = (header, elements) => (
  <Category>
    <H3>{header}</H3>
    <Ul>
      {elements.map((element) => {
        return <Li key={element.id}>{element.element}</Li>;
      })}
    </Ul>
  </Category>
);

/**
 * Renders the Footer component with community information and links.
 *
 */
function Footer() {
  return (
    <FooterWrapper>
      <Nav>
        <LogoContainer>
          <Logo src={logo} />
          <Join>Join the Community</Join>
        </LogoContainer>
        {renderList(footerHeaders[0].element, footerElements.slice(0, 5))}
        {renderList(footerHeaders[1].element, footerElements.slice(5, 8))}
        {renderList(footerHeaders[2].element, footerElements.slice(8, 12))}
        {renderList(footerHeaders[3].element, footerElements.slice(12, 16))}
      </Nav>
    </FooterWrapper>
  );
}

export default Footer;
