import React, { useEffect, useState } from "react";
import { genres } from "data/filtersInfo";
import selectFilter from "utils/selectFilter";
import useFilter from "hooks/useFilters";
import { GenresContainer, Genre, Title } from "components/filter/filterStyles";

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

      <Title>Genres</Title>
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
