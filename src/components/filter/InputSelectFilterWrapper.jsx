import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const H3 = styled.h3`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
`;

const Container = styled.label`
  box-sizing: border-box;
  display: inline-flex;
  width: 100%;
`;
const Input = styled.input`
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.0625rem;
  display: inline-block;
  height: 1rem;
  line-height: initial;
  min-width: 1rem;
  width: 1rem;
`;
const Label = styled.label`
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  margin: 0.1875rem 0.25rem 0 0;
  position: relative;
`;

/**
 * InputSelectFilterWrapper component provides a user interface for displaying filter based on their category
 *
 * @param {string} filterText - The text to display as the title of the filter section.
 * @param {string} firstOption - The text to display for the first filter option.
 * @param {string} chosenFilter - The chosen filter option.
 * @param {JSX.Element} children - The child elements to display when the filter is expanded.
 */
function InputSelectFilterWrapper({
  filterText,
  firstOption,
  chosenFilter,
  children,
}) {
  const [showOptions, setShowOptions] = useState(true);
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    if (showOptions) {
      selectFilter(chosenFilter, null, filter, setFilter);
    }
  }, [showOptions]);
  return (
    <>
      <H3>{filterText}</H3>
      <Container>
        <Input
          type="checkbox"
          id="box"
          checked={showOptions}
          onChange={() => {
            setShowOptions(!showOptions);
          }}
        />
        <Label htmlFor="box"> {firstOption}</Label>
      </Container>
      {!showOptions && children}
    </>
  );
}
InputSelectFilterWrapper.propTypes = {
  filterText: PropTypes.string.isRequired,
  firstOption: PropTypes.string.isRequired,
  chosenFilter: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default InputSelectFilterWrapper;
