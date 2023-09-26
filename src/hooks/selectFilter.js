const selectFilter = (filterType, value, filter, setFilter) => {
  const filterValue = {};
  filterValue[filterType] = value;
  setFilter({ ...filter, ...filterValue });
};

export default selectFilter;
