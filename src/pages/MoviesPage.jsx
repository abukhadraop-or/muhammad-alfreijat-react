import React from "react";
import styled from "@emotion/styled";
import MoviesContainer from "components/movie/MoviesContainer";

const PageContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0.625rem 2.5rem;
`;
/**
 * Represents a page for displaying the whole movie page.
 */
function MoviesPage() {
  return (
    <PageContainer>
      <h2 style={{ width: "100%" }}>Popular Movies</h2>
      <MoviesContainer />
    </PageContainer>
  );
}

export default MoviesPage;
