import React from "react";
import FiltersContainer from "components/filter/filters-container";
import Movies from "components/movie/movies";
import MoviesFilterContainer from "components/movie/movies-container/styles";
/**
 * MoviesContainer component displays FiltersContainer and Movies components side by side .
 *
 */

export default function MoviesContainer() {
  return (
    <MoviesFilterContainer>
      <FiltersContainer />
      <Movies />
    </MoviesFilterContainer>
  );
}
