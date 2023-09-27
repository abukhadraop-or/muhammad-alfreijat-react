/**
 * A custom hook for managing filtering options.
 *
 * @returns {{filter: Object, setFilter: Function}} An object containing the filter state and a function to update it.
 */
const { fitlers } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useFilter = () => {
  const [filter, setFilter] = useAtom(fitlers);

  return { filter, setFilter };
};

export default useFilter;
