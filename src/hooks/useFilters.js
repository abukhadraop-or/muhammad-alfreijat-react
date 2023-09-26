const { fitlers } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useFilter = () => {
  const [filter, setFilter] = useAtom(fitlers);

  return { filter, setFilter };
};

export default useFilter;
