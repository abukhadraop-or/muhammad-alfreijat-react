import React from "react";
import styled from "@emotion/styled";
import FiltersContainer from "components/filter/FiltersContainer";
import Movies from "components/movie/Movies";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export default function MoviesContainer() {
  return (
    <Container>
      <FiltersContainer />
      <Movies />
    </Container>
  );
}
