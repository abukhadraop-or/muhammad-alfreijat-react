import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { genres } from "data/filtersInfo";
import selectFilter from "utils/selectFilter";
import useFilter from "hooks/useFilters";

const H3 = styled.h3`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
`;

const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Genre = styled.div`
  border-radius: 0.875rem;
  border: 1px solid #9e9e9e;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.9em;
  padding: 0.25rem 0.75rem;

  &:hover {
    background-color: rgba(1, 180, 228, 1);
    border-color: rgba(1, 180, 228, 1);
    color: #fff;
  }
`;
/**
 * GenresInput component allows users to filter items by genres.
 * @component
 */
function GenresInput() {
  const { filter, setFilter } = useFilter();
  const filterOptions = genres.map((option) => option.id);
  const initialCheckedOptions = Array.from(
    { length: genres.length },
    () => false,
  );
  const [checkedOptions, setCheckedOptions] = useState(initialCheckedOptions);
  /**
   * Handle the user's selection of genres.
   * @param {number} index - The index of the selected genre.
   */
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
      {/* Display the component title */}

      <H3>Genres</H3>
      <GenresContainer>
        {/* Display each genre as a clickable option */}

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
