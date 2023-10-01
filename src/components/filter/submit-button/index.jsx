import React from "react";
import useFetchMovies from "utils/fetchMovies";
import Search from "components/filter/submit-button/styles";
import useFeatures from "hooks/useFeature";

/**
 * SubmitButton component provides a button to trigger the search for movies based on applied filters.
 *
 */
function SubmitButton() {
  const { filter, setMoviesList } = useFeatures();

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
