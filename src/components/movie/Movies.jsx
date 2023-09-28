import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import fetchMovies from "utils/fetchMovies";
import MovieCard from "components/movie/MovieCard";
import useMovies from "hooks/useMovies";
import { loadingMovies } from "atoms/allAtoms";
import NoItems from "components/movie/NoItems";
import useFilter from "hooks/useFilters";

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const LoadButton = styled.button`
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

/**
 * Movies component displays a list of movies fetched from an API and provides a "Load More" button for pagination.
 *
 */
export default function Movies() {
  const { moviesList, setMoviesList } = useMovies();
  const { filter } = useFilter();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  /**
   * Fetch movies from an API and set them in the state.
   */
  const setMovies = async () => {
    try {
      const response = await fetchMovies({});
      setLoading(false);
      setMoviesList(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setMovies();
  }, []);

  /**
   * If the component is still loading, display skeleton image with empty data.
   */
  useEffect(() => {
    if (loading) {
      setMoviesList(loadingMovies);
    }
  }, [loading]);
  /**
   * Fetch more movies for pagination when the page number changes.
   */
  const Loadmore = async () => {
    try {
      const response = await fetchMovies({ ...filter, page });
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
