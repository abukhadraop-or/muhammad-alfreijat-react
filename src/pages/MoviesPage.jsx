import React from "react";
import styled from "@emotion/styled";
import MoviesContainer from "components/movie/MoviesContainer";

const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1400px;
  padding: 10px 40px;
`;
function MoviesPage() {
  return (
    <PageContainer>
      <h2 style={{ width: "100%" }}>Popular Movies</h2>
      <MoviesContainer />
    </PageContainer>
  );
}

export default MoviesPage;
