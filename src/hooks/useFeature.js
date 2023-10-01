const { useAtom } = require("jotai");
const {
  displaySidebar,
  fitlers,
  movies,
  openPanel,
} = require("atoms/allAtoms");

/**
 * A custom hook that provides access to various application features through Jotai atoms.
 *
 * @returns {Object} An object containing feature-related states and setters.
 * @property {boolean} panel - The state of the panel.
 * @property {function} setPanel - A function to set the panel state.
 * @property {boolean} sidebar - The state of the sidebar.
 * @property {function} setSidebar - A function to set the sidebar state.
 * @property {any} filter - The state related to filters (you might want to provide a more specific type).
 * @property {function} setFilter - A function to set the filter state.
 * @property {array} moviesList - The list of movies.
 * @property {function} setMoviesList - A function to set the movies list.
 */
const useFeatures = () => {
  const [panel, setPanel] = useAtom(openPanel);
  const [sidebar, setSidebar] = useAtom(displaySidebar);
  const [filter, setFilter] = useAtom(fitlers);
  const [moviesList, setMoviesList] = useAtom(movies);

  return {
    panel,
    setPanel,
    sidebar,
    setSidebar,
    filter,
    setFilter,
    moviesList,
    setMoviesList,
  };
};

export default useFeatures;
