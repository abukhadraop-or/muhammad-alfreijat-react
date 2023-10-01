import React from "react";
import { NoItemDiv } from "components/movie/movieStyles";
import { NO_ITEMS_MESSAGE } from "data/constants";

/**
 * MoviesContainer component renders when there is no movie to display.
 *
 */
function NoItems() {
  return <NoItemDiv>{NO_ITEMS_MESSAGE}</NoItemDiv>;
}

export default NoItems;
