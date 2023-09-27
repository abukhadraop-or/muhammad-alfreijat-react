import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const H3 = styled.h3`
  align-items: center;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
`;

const Select = styled.select`
  background-color: #ced3db;
  border-radius: 0.25rem;
  border: 0;
  font-size: 0.9em;
  padding: 0.375rem 0.75rem;
  width: 100%;
`;

/**
 * SelectFilter component allows users to filter items by selecting from a list of options.
 *
 * @param {string} title - The title of the filter.
 * @param {Array} options - An array of filter options, each with an id, option name, and value.
 * @param {string} changedFilter - The identifier for the changed filter.
 * @param {string} optionsId - The key in the options object for the id.
 * @param {string} optionsName - The key in the options object for the option name.
 * @param {string} OptionsValue - The key in the options object for the option value.
 */

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
