import React from "react";
import PropTypes from "prop-types";
import arrow from "assets/rightarrow.svg";
import useOpenPanel from "hooks/useOpenPanel";
import {
  PanelWrapper,
  Panel,
  PanelTitle,
  ArrowIcon,
} from "components/filter/filterStyles";

/**
 * A collapsible filter panel component.
 *
 * @component
 * @param {string} title - The title of the filter panel.
 * @param {React.ReactNode|React.ReactNode[]} children - The content of the filter panel.
 * @param {string} chosenPanel - A unique identifier for the chosen panel.
 */

function FilterPanel({ title, children, chosenPanel }) {
  const { panel, setPanel } = useOpenPanel();

  return (
    <PanelWrapper>
      <Panel>
        <PanelTitle>{title}</PanelTitle>
        <ArrowIcon
          src={arrow}
          open={panel[chosenPanel]}
          onClick={() => {
            setPanel((prevPanel) => ({
              ...prevPanel,
              [chosenPanel]: !prevPanel[chosenPanel],
            }));
          }}
        />
      </Panel>
      {children}
    </PanelWrapper>
  );
}

FilterPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  chosenPanel: PropTypes.string.isRequired,
};

export default FilterPanel;
