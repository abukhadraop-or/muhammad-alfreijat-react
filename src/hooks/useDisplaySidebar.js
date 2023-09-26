const { displaySidebar } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useDisplaySideBar = () => {
  const [sidebar, setSidebar] = useAtom(displaySidebar);

  return { sidebar, setSidebar };
};

export default useDisplaySideBar;
