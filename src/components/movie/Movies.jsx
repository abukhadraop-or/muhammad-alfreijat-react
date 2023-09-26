import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useFetchMovies from "hooks/useFetchMovies";
import MovieCard from "components/movie/MovieCard";
import useMovies from "hooks/useMovies";
import { loadingMovies } from "atoms/allAtoms";
import NoItems from "components/movie/NoItems";
import useFilter from "hooks/useFilters";

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const LoadButton = styled.button`
  width: 100%;
  height: 3.125rem;
  display: inline-flex;
  max-width: 62.5rem;
  font-weight: 600;
  justify-content: center;
  color: #fff;
  align-items: center;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
  border: 0;
  background-color: #01b4e4;
  &:hover {
    color: #032541;
  }
`;
export default function Movies() {
  const { moviesList, setMoviesList } = useMovies();
  const { filter } = useFilter();
  const [laoding, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const fetchMovies = async () => {
    try {
      const response = await useFetchMovies({});
      setLoading(false);
      setMoviesList(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (laoding) {
      setMoviesList(loadingMovies);
    }
  }, [laoding]);

  const Loadmore = async () => {
    try {
      const response = await useFetchMovies({ ...filter, page });
      const newMovieList = [...moviesList, ...response.results];
      setMoviesList(newMovieList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (page !== 1) {
      Loadmore();
    }
  }, [page]);
  return (
    <>
      {moviesList.length === 0 ? (
        <NoItems />
      ) : (
        <MoviesContainer>
          {moviesList?.map((movie) => (
            <MovieCard
              title={movie.original_title}
              key={movie.id}
              img={movie.poster_path}
              date={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
          <LoadButton
            type="button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load More
          </LoadButton>
        </MoviesContainer>
      )}
      <div />
    </>
  );
}
