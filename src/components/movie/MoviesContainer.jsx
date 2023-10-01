import React from "react";
import FiltersContainer from "components/filter/FiltersContainer";
import Movies from "components/movie/Movies";
import { MoviesFilterContainer } from "components/movie/movieStyles";
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
