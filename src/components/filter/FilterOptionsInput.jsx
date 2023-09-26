import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const Container = styled.label`
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
`;
const Input = styled.input`
  padding: 0;
  box-sizing: border-box;
  min-width: 1rem;
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;
  line-height: initial;
  border-width: 0.0625rem;
  border-style: solid;
  outline: 0;
  display: inline-block;
  vertical-align: middle;
  webkit-appearance: none;
`;
const Label = styled.label`
  display: inline;
  margin: 0.1875rem 0.25rem; 0 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
`;

function FilterOptionsInput({ options, chosenFilter }) {
  const { filter, setFilter } = useFilter();
  const filterOptions = options.map((option) => option.value);
  const [chosenFilters, setChosenFilters] = useState({ ...filterOptions });
  const initialCheckedOptions = Array.from(
    { length: options.length },
    () => true,
  );

  const [checkedOptions, setCheckedOptions] = useState(initialCheckedOptions);
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
