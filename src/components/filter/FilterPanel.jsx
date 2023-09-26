import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import arrow from "assets/rightarrow.svg";
import useOpenPanel from "hooks/useOpenPanel";

const PanelWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 260px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1px 16px;
`;

const PanelTitle = styled.h2`
  display: inline-flex;
  font-size: 1.1em;
  justify-content: space-between;
  padding-right: 10px;
  width: 100%;
`;

const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  transform: ${(props) => (props.open ? "rotate(90deg);" : "")};
`;

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
