/**
 * A custom hook to fetch keywords from The Movie Database (TMDb) API based on a search query.
 *
 * @param {string} keyword - The search query for keywords.
 * @returns {Promise<Array>} A Promise that resolves to an array of keyword objects.
 */

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGZmODMzN2FjNTNkOGY1MjQ0M2ExZDYzMDU3MGFmZiIsInN1YiI6IjY1MDk3NGRjMzk0YTg3MDBlMjI3YWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D9BjaxIaoMbriOZgKWo4qhmwuEVMXeMh3epbu95yFNY",
  },
};
const useFetchKeywords = async (keyword) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/keyword?query=${keyword}&page=1`,
    options,
  );
  const results = await response.json();
  return results.results;
};

export default useFetchKeywords;
