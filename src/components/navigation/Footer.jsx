import React from "react";
import logo from "assets/logo.svg";
import { footerHeaders, footerElements } from "data/navigationInfo";
import {
  FooterWrapper,
  FooterContainer,
  FooterLogoContainer,
  FooterLogo,
  FooterSubTitle,
  FooterListTitle,
  FooterListContainer,
  FooterListItem,
  FooterList,
} from "components/navigation/navigationStyles";

/**
 * Renders list that has links in the footer.
 *
 */
const renderList = (header, elements) => (
  <FooterList>
    <FooterListTitle>{header}</FooterListTitle>
    <FooterListContainer>
      {elements.map((element) => {
        return (
          <FooterListItem key={element.id}>{element.element}</FooterListItem>
        );
      })}
    </FooterListContainer>
  </FooterList>
);

/**
 * Renders the Footer component with community information and links.
 *
 */
function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogoContainer>
          <FooterLogo src={logo} />
          <FooterSubTitle>Join the Community</FooterSubTitle>
        </FooterLogoContainer>
        {renderList(footerHeaders[0].element, footerElements.slice(0, 5))}
        {renderList(footerHeaders[1].element, footerElements.slice(5, 8))}
        {renderList(footerHeaders[2].element, footerElements.slice(8, 12))}
        {renderList(footerHeaders[3].element, footerElements.slice(12, 16))}
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
