import React from "react";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import { footerHeaders, footerElements } from "data/navigationInfo";

const FooterWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  background-image: radial-gradient(
    at 30%top,
    #031d33 0%,
    rgba(3, 37, 65, 1) 70%
  );
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;

  @media (max-width: 1024px) {
    position: static;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #fff;
  flex-wrap: wrap;
  font-size: 0.9em;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  text-align: right;
  position: relative;
  top: -2.25rem;
  right: 0;
  margin-right: 2.5rem;
  min-width: 0;
  box-sizing: border-box;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  outline: 0;
  width: 8.125rem;
  height: 5.875rem;
  overflow: clip;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Join = styled.a`
  position: relative;
  top: 8.75rem;
  border-color: #fff;
  background-color: #fff;
  color: #01b4e4;
  font-size: 1.3em;
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    position: static;
  }
`;

const Category = styled.div`
  margin-right: 2.5rem;
  box-sizing: border-box;
`;

const H3 = styled.h3`
  font-size: 1.4em;
  line-height: 1.4em;
  color: #fff;
  white-space: nowrap;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 0.25rem;
  box-sizing: border-box;
  padding: 0;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Li = styled.li`
  line-height: 1.6em;
  max-width: 16.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  padding: 0.25rem;
`;

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
