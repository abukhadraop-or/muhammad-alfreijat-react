import React from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  height: 60vh;
  width: 60vw;
`;
/**
 * MoviesContainer component renders when there is no movie to display.
 *
 */
function NoItems() {
  return <Div>No items were found that match your query.</Div>;
}

export default NoItems;
