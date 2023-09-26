const useFetchMovies = async ({
  page = 1,
  sort = "popularity.desc",
  language = null,
  genre = null,
  country = null,
  dateGte = null,
  dateLte = null,
  keywords = null,
  releaseType = null,
  watchType = null,
}) => {
  const languageFilter = language ? `&with_original_language=${language}` : "";

  const genresFilter =
    genre || genre?.length === 0
      ? `&with_genres=${
          genre[0] +
          genre.slice(1).reduce((res, value) => `${res}%2C${value}`, "")
        }`
      : "";
  const keywordsFilter = keywords
    ? `&with_genres=${
        keywords[0] +
        keywords.slice(1).reduce((res, value) => `${res}%2C${value}`, "")
      }`
    : "";
  const typeFilter =
    releaseType || releaseType?.length === 0
      ? `&with_release_type=${
          releaseType[0] +
          releaseType.slice(1).reduce((res, value) => `${res}%7C${value}`, "")
        }`
      : "";
  const watchTypeFilter =
    watchType || watchType?.length === 0
      ? `&with_watch_monetization_types=${
          watchType[0] +
          watchType.slice(1).reduce((res, value) => `${res}%7C${value}`, "")
        }`
      : "";
  const countryFilter = country ? `&with_origin_country=${country}` : "";
  const dateGteFilter = dateGte ? `&primary_release_date.gte=${dateGte}` : "";
  const dateLteFilter = dateLte ? `&primary_release_date.lte=${dateLte}` : "";

  const Uri = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=${sort}${genresFilter}${countryFilter}${languageFilter}${dateGteFilter}${dateLteFilter}${keywordsFilter}${typeFilter}${watchTypeFilter}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGZmODMzN2FjNTNkOGY1MjQ0M2ExZDYzMDU3MGFmZiIsInN1YiI6IjY1MDk3NGRjMzk0YTg3MDBlMjI3YWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D9BjaxIaoMbriOZgKWo4qhmwuEVMXeMh3epbu95yFNY",
    },
  };
  console.log(Uri);
  const response = await fetch(Uri, options);
  return response.json();
};

export default useFetchMovies;
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
// https://api.themoviedb.org/3/genre/movie/list    for Genres
