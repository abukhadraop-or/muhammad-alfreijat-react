import React from "react";
import styled from "@emotion/styled";
import useFilter from "hooks/useFilters";
import useMovies from "hooks/useMovies";
import useFetchMovies from "hooks/useFetchMovies";

const Search = styled.button`
  width: 260px;
  height: 44px;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  color: #fff;
  align-items: center;
  border-radius: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
  border: 0;
  background-color: #01b4e4;
  &:hover {
    background-color: #032541;
  }
  &:disabled {
    background-color: #ececec;
    color: #767676;
    cursor: default;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

function SubmitButton() {
  const { filter } = useFilter();
  const { moviesList, setMoviesList } = useMovies();

  const searchMovies = async () => {
    const response = await useFetchMovies(filter);
    setMoviesList(response.results);
    console.log(moviesList);
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
