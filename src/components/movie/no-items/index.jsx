import React from "react";
import NoItemDiv from "components/movie/no-items";
import { NO_ITEMS_ERROR } from "data/constants";

/**
 * MoviesContainer component renders when there is no movie to display.
 *
 */
function NoItems() {
  return <NoItemDiv>{NO_ITEMS_ERROR}</NoItemDiv>;
}

export default NoItems;
