import styled from "@emotion/styled";

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const LoadButton = styled.button`
  align-items: center;
  border-radius: 0.625rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.2rem;
  font-weight: 600;
  height: 3.125rem;
  justify-content: center;
  line-height: 1;
  max-width: 62.5rem;
  width: 100%;
  background-color: #01b4e4;
  &:hover {
    color: #032541;
  }
`;
