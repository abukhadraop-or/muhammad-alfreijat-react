import React from "react";
import MoviesContainer from "components/movie/MoviesContainer";
import { PageContainer, PageTitle } from "pages/pages.styles";
import { moviePageMainTitle } from "data/constants";

/**
 * Represents a page for displaying the whole movie page.
 */
function MoviesPage() {
  return (
    <PageContainer>
      <PageTitle>{moviePageMainTitle}</PageTitle>
      <MoviesContainer />
    </PageContainer>
  );
}

export default MoviesPage;
