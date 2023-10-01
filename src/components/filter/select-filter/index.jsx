import React from "react";
import PropTypes from "prop-types";
import selectFilter from "utils/selectFilter";
import { Title, Select } from "components/filter/select-filter/styles";
import useFeatures from "hooks/useFeature";

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
  const { filter, setFilter } = useFeatures();
  return (
    <>
      <label htmlFor={title}>
        <Title>{title}</Title>
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
