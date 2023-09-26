import React from "react";
import styled from "@emotion/styled";
import useOpenPanel from "hooks/useOpenPanel";
import PropTypes from "prop-types";

const PanalContent = styled.div`
  box-sizing: border-box;
  border-top: 1px solid #eee;
  padding: 0 16px 16px;
  display: ${(props) => (props.open ? "block" : "none")};
  width: 260px;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
  }
`;
function PanelContent({ chosenPanel, children }) {
  const { panel } = useOpenPanel();

  return <PanalContent open={panel[chosenPanel]}>{children}</PanalContent>;
}

PanelContent.propTypes = {
  chosenPanel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PanelContent;
