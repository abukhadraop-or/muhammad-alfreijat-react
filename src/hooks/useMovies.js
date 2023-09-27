/**
 * A custom hook for managing movie list data.
 *
 * @returns {{moviesList: Array, setMoviesList: Function}} An object containing the movie list and a function to update it.
 */
const { movies } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useMovies = () => {
  const [moviesList, setMoviesList] = useAtom(movies);

  return { moviesList, setMoviesList };
};

export default useMovies;
