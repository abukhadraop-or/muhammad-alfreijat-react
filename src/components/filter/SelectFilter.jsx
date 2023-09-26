import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const H3 = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const Select = styled.select`
  font-size: 0.9em;
  width: 100%;
  background-color: #ced3db;
  padding: 0.375rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
`;
function SelectFilter({
  title,
  options,
  changedFilter,
  optionsId,
  optionsName,
  OptionsValue,
}) {
  const { filter, setFilter } = useFilter();
  return (
    <>
      <label htmlFor={title}>
        <H3>{title}</H3>
      </label>
      <Select
        name={title}
        id={title}
        onChange={(e) => {
          selectFilter(changedFilter, e.target.value, filter, setFilter);
        }}
      >
        {options.map((option) => (
          <option key={option[optionsId]} value={option[OptionsValue]}>
            {option[optionsName]}
          </option>
        ))}
      </Select>
    </>
  );
}

SelectFilter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changedFilter: PropTypes.string.isRequired,
  optionsId: PropTypes.string.isRequired,
  optionsName: PropTypes.string.isRequired,
  OptionsValue: PropTypes.string.isRequired,
};

export default SelectFilter;
