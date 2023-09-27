/**
 * A custom hook to fetch movies from The Movie Database (TMDb) API based on various filters.
 *
 * @param {Object} options - An object containing various filtering options.
 * @param {number} options.page - The page number for paginated results (default is 1).
 * @param {string} options.sort - The sorting order for the results (default is "popularity.desc").
 * @param {string|null} options.language - The original language of the movies (optional).
 * @param {Array|null} options.genre - An array of genre IDs (optional).
 * @param {string|null} options.country - The origin country of the movies (optional).
 * @param {string|null} options.dateGte - Filter movies with a release date greater than or equal to this date (optional).
 * @param {string|null} options.dateLte - Filter movies with a release date less than or equal to this date (optional).
 * @param {Array|null} options.keywords - An array of keyword IDs (optional).
 * @param {Array|null} options.releaseType - An array of release types (optional).
 * @param {Array|null} options.watchType - An array of watch monetization types (optional).
 * @returns {Promise<Array>} A Promise that resolves to an array of movie objects.
 */
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
    genre || genre?.length === 0 ? `&with_genres=${genre.join(",")}` : "";
  const keywordsFilter = keywords ? `&with_keywords=${keywords.join(",")}` : "";
  const typeFilter =
    releaseType || releaseType?.length === 0
      ? `&with_release_type=${releaseType.join("|")}`
      : "";
  const watchTypeFilter =
    watchType || watchType?.length === 0
      ? `&with_watch_monetization_types=${watchType.join("|")}`
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
