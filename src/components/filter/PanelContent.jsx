import React from "react";
import styled from "@emotion/styled";
import useOpenPanel from "hooks/useOpenPanel";
import PropTypes from "prop-types";

const PanalContent = styled.div`
  border-top: 0.0625rem solid #eee;
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 0 1rem 1rem;
  width: 260px;
  @media (max-width: 1024px) {
    margin-top: 0;
    width: 100%;
  }
`;
/**
 * PanelContent component provides a container for displaying filter panel content.
 *
 * @param {string} chosenPanel - The identifier of the chosen filter panel.
 * @param {JSX.Element} children - The child elements to display within the panel content.
 */
function PanelContent({ chosenPanel, children }) {
  const { panel } = useOpenPanel();

  return <PanalContent open={panel[chosenPanel]}>{children}</PanalContent>;
}

PanelContent.propTypes = {
  chosenPanel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PanelContent;
