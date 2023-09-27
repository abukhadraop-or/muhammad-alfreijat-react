import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const Container = styled.label`
  display: inline-flex;
  width: 100%;
`;
const Input = styled.input`
  cursor: pointer;
  min-width: 1rem;
`;
const Label = styled.label`
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  margin: 0.1875rem 0.25rem; 0 0;
`;
/**
 * Component for filtering options with checkboxes.
 * @param {Object} props - The component's props.
 * @param {Array} props.options - An array of options to display.
 * @param {string} props.chosenFilter - The chosen filter name.
 */

function FilterOptionsInput({ options, chosenFilter }) {
  const { filter, setFilter } = useFilter();
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
          <Input
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
