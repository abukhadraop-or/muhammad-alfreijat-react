import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { genres } from "data/filtersInfo";
import selectFilter from "hooks/selectFilter";
import useFilter from "hooks/useFilters";

const H3 = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
`;

const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Genre = styled.div`
  display: inline-flex;
  border: 1px solid #9e9e9e;
  border-radius: 0.875rem;
  font-size: 0.9em;
  padding: 0.25rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(1, 180, 228, 1);
    color: #fff;
    border-color: rgba(1, 180, 228, 1);
  }
`;

function GenresInput() {
  const { filter, setFilter } = useFilter();
  const filterOptions = genres.map((option) => option.id);
  const initialCheckedOptions = Array.from(
    { length: genres.length },
    () => false,
  );
  const [checkedOptions, setCheckedOptions] = useState(initialCheckedOptions);

  const checkInput = (index) => {
    const updatedCheckedOptions = [...checkedOptions];
    updatedCheckedOptions[index] = !updatedCheckedOptions[index];
    setCheckedOptions(updatedCheckedOptions);
  };
  useEffect(() => {
    const chosenGenres = filterOptions.filter(
      (item, index) => checkedOptions[index] === true,
    );
    selectFilter("genre", chosenGenres, filter, setFilter);
  }, [checkedOptions]);
  return (
    <>
      <H3>Genres</H3>
      <GenresContainer>
        {genres.map((item, index) => (
          <Genre
            style={{
              backgroundColor: checkedOptions[index]
                ? "rgba(1, 180, 228, 1)"
                : "",
              color: checkedOptions[index] ? "#fff" : "",
              borderColor: checkedOptions[index] ? "rgba(1, 180, 228, 1)" : "",
            }}
            key={item.id}
            onClick={() => {
              checkInput(index);
            }}
          >
            {item.name}
          </Genre>
        ))}
      </GenresContainer>
    </>
  );
}

export default GenresInput;
