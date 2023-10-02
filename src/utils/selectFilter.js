/**
 * Updates the filter object by setting or modifying a specific filter type with a new value.
 *
 * @param {string} filterType - The type of filter to set or modify.
 * @param {string} value - The new value to set for the filter.
 * @param {object} filter - The current filter object.
 * @param {Function} setFilter - The function to set the updated filter object.
 */
const selectFilter = (filterType, value, filter, setFilter) => {
  const filterValue = {};
  filterValue[filterType] = value;
  setFilter({ ...filter, ...filterValue });
};

export default selectFilter;
