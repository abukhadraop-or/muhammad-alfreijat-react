import React, { useEffect, useState } from "react";
import fetchMovies from "utils/fetchMovies";
import MovieCard from "components/movie/movie-card";
import { loadingMovies } from "atoms/allAtoms";
import NoItems from "components/movie/no-items";
import { MoviesContainer, LoadButton } from "components/movie/movies/styles";
import useFeatures from "hooks/useFeature";

/**
 * Movies component displays a list of movies fetched from an API and provides a "Load More" button for pagination.
 *
 */
export default function Movies() {
  const { moviesList, setMoviesList, filter } = useFeatures();
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
