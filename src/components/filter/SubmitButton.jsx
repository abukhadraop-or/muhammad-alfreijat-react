import React from "react";
import useFilter from "hooks/useFilters";
import useMovies from "hooks/useMovies";
import useFetchMovies from "utils/fetchMovies";
import { Search } from "components/filter/filterStyles";

/**
 * SubmitButton component provides a button to trigger the search for movies based on applied filters.
 *
 */
function SubmitButton() {
  const { filter } = useFilter();
  const { setMoviesList } = useMovies();

  const searchMovies = async () => {
    const response = await useFetchMovies(filter);
    setMoviesList(response.results);
  };
  return (
    <Search
      type="button"
      onClick={searchMovies}
      disabled={Object.keys(filter).length === 0}
    >
      Search
    </Search>
  );
}

export default SubmitButton;
