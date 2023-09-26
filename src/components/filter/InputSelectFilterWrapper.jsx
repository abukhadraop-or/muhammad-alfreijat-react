import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const H3 = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
`;

const Container = styled.label`
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
`;
const Input = styled.input`
  padding: 0;
  box-sizing: border-box;
  min-width: 1rem;
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;
  line-height: initial;
  border-width: 0.0625rem;
  border-style: solid;
  outline: 0;
  display: inline-block;
  vertical-align: middle;
  webkit-appearance: none;
`;
const Label = styled.label`
  display: inline;
  margin: 0.1875rem 0.25rem; 0 0;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
`;

function InputSelectFilterWrapper({
  filterText,
  firstOption,
  chosenFilter,
  children,
}) {
  const [showOptions, setShowOptions] = useState(true);
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    if (showOptions) {
      selectFilter(chosenFilter, null, filter, setFilter);
    }
  }, [showOptions]);
  return (
    <>
      <H3>{filterText}</H3>
      <Container>
        <Input
          type="checkbox"
          id="box"
          checked={showOptions}
          onChange={() => {
            setShowOptions(!showOptions);
          }}
        />
        <Label htmlFor="box"> {firstOption}</Label>
      </Container>
      {!showOptions && children}
    </>
  );
}
InputSelectFilterWrapper.propTypes = {
  filterText: PropTypes.string.isRequired,
  firstOption: PropTypes.string.isRequired,
  chosenFilter: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default InputSelectFilterWrapper;
