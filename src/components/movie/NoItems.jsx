import React from "react";
import { NoItemDiv } from "components/movie/movieStyles";
import { noItemsMessage } from "data/constants";

/**
 * MoviesContainer component renders when there is no movie to display.
 *
 */
function NoItems() {
  return <NoItemDiv>{noItemsMessage}</NoItemDiv>;
}

export default NoItems;
