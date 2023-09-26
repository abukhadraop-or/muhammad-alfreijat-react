import React from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 60vw;
  height: 60vh;
`;
function NoItems() {
  return <Div>No items were found that match your query.</Div>;
}

export default NoItems;
