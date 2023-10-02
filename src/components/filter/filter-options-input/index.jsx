import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import selectFilter from "utils/selectFilter";
import {
  Container,
  InputCheckbox,
  Label,
} from "components/filter/filter-options-input/styles";
import useFeatures from "hooks/useFeature";

/**
 * Component for filtering options with checkboxes.
 * @param {Object} props - The component's props.
 * @param {Array} props.options - An array of options to display.
 * @param {string} props.chosenFilter - The chosen filter name.
 */

function FilterOptionsInput({ options, chosenFilter }) {
  const { filter, setFilter } = useFeatures();
  const filterOptions = options.map((option) => option.value);
  const [chosenFilters, setChosenFilters] = useState({ ...filterOptions });
  const initialCheckedOptions = Array.from(
    { length: options.length },
    () => true,
  );

  const [checkedOptions, setCheckedOptions] = useState(initialCheckedOptions);
  /**
   * Handle checkbox input change.
   * @param {number} index - The index of the checkbox.
   */
  const checkInput = (index) => {
    const updatedCheckedOptions = [...checkedOptions];
    updatedCheckedOptions[index] = !updatedCheckedOptions[index];
    setCheckedOptions(updatedCheckedOptions);

    if (checkedOptions[index]) {
      const deletedFilters = { ...chosenFilters };
      delete deletedFilters[index];
      setChosenFilters(deletedFilters);
    } else {
      const addedFilters = { ...chosenFilters };
      addedFilters[index] = filterOptions[index];
      setChosenFilters(addedFilters);
    }
  };

  useEffect(() => {
    const arrOfChosenFilter = [...Object.values(chosenFilters)];
    selectFilter(chosenFilter, arrOfChosenFilter, filter, setFilter);
  }, [chosenFilters]);
  return (
    <>
      {options.map((option, index) => (
        <Container key={option.id}>
          <InputCheckbox
            type="checkbox"
            value={option.value}
            id={option.value}
            checked={checkedOptions[index]}
            onChange={() => {
              checkInput(index);
            }}
          />
          <Label htmlFor={option.value}>{option.option}</Label>
        </Container>
      ))}
      <div />
    </>
  );
}
FilterOptionsInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  chosenFilter: PropTypes.string.isRequired,
};

export default FilterOptionsInput;
