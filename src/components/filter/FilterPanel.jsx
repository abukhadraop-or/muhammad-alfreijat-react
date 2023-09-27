import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import arrow from "assets/rightarrow.svg";
import useOpenPanel from "hooks/useOpenPanel";

const PanelWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 16.25rem;
  border: 1px solid #e3e3e3;
  border-radius: 0.5rem;
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.0625rem 1rem;
  width: 100%;
`;

const PanelTitle = styled.h2`
  display: inline-flex;
  font-size: 1.1em;
  justify-content: space-between;
  padding-right: 0.625rem;
  width: 100%;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
  height: 1rem;
  transform: ${(props) => (props.open ? "rotate(90deg);" : "")};
  width: 1rem;
`;

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
