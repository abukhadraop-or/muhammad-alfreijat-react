import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "utils/selectFilter";
import {
  CheckboxFilterContainer,
  MainCheckboxInput,
  Title,
  Label,
} from "components/filter/filterStyles";

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
      <Title>{filterText}</Title>
      <CheckboxFilterContainer>
        <MainCheckboxInput
          type="checkbox"
          id="box"
          checked={showOptions}
          onChange={() => {
            setShowOptions(!showOptions);
          }}
        />
        <Label htmlFor="box"> {firstOption}</Label>
      </CheckboxFilterContainer>
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
