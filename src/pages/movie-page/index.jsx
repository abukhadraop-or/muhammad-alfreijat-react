import React from "react";
import MoviesContainer from "components/movie/movies-container";
import { PageContainer, PageTitle } from "pages/movie-page/styles";
import { MOVIE_PAGE_MAIN_TITLE } from "data/constants";

/**
 * Represents a page for displaying the whole movie page.
 */
function MoviesPage() {
  return (
    <PageContainer>
      <PageTitle>{MOVIE_PAGE_MAIN_TITLE}</PageTitle>
      <MoviesContainer />
    </PageContainer>
  );
}

export default MoviesPage;
