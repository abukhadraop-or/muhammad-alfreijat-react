import React from "react";
import PropTypes from "prop-types";
import PanalContent from "components/filter/panel-content/styles";
import useFeatures from "hooks/useFeature";

/**
 * PanelContent component provides a container for displaying filter panel content.
 *
 * @param {string} chosenPanel - The identifier of the chosen filter panel.
 * @param {JSX.Element} children - The child elements to display within the panel content.
 */
function PanelContent({ chosenPanel, children }) {
  const { panel } = useFeatures();

  return <PanalContent open={panel[chosenPanel]}>{children}</PanalContent>;
}

PanelContent.propTypes = {
  chosenPanel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PanelContent;
