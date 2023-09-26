const { movies } = require("atoms/allAtoms");
const { useAtom } = require("jotai");

const useMovies = () => {
  const [moviesList, setMoviesList] = useAtom(movies);

  return { moviesList, setMoviesList };
};

export default useMovies;
