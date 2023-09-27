/**
 * Custom hook for managing the display of the sidebar in the application.
 *
 * @returns {object} An object containing the current `sidebar` state and a function to set it.
 */
const { displaySidebar } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useDisplaySideBar = () => {
  const [sidebar, setSidebar] = useAtom(displaySidebar);

  return { sidebar, setSidebar };
};

export default useDisplaySideBar;
