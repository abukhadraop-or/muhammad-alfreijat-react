import styled from "@emotion/styled";

const MoviesFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default MoviesFilterContainer;
