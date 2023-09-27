import React from "react";
import styled from "@emotion/styled";
import PanelContent from "components/filter/PanelContent";
import FilterPanel from "components/filter/FilterPanel";
import SelectFilter from "components/filter/SelectFilter";
import SubmitButton from "components/filter/SubmitButton";
import InputDate from "components/filter/InputDate";
import GenresInput from "components/filter/GenresInput";
import InputSelectFilterWrapper from "components/filter/InputSelectFilterWrapper";
import FilterOptionsInput from "components/filter/FilterOptionsInput";
import InputKeywords from "components/filter/InputKeywords";
import {
  sortingOptions,
  availabilities,
  releases,
  languages,
  countries,
} from "data/filtersInfo";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

/**
 * A component that displays a filter container with various filter options.
 *
 */
export default function FiltersContainer() {
  return (
    <FilterContainer>
      {/* Sort Panel */}

      <FilterPanel title="Sort" chosenPanel="sort">
        <PanelContent chosenPanel="sort">
          <SelectFilter
            title="Sort Results By"
            options={sortingOptions}
            changedFilter="sort"
            optionsId="id"
            optionsName="option"
            OptionsValue="value"
          />
        </PanelContent>
      </FilterPanel>

      {/* Where To Watch Panel */}

      <FilterPanel title="Where To Watch" chosenPanel="watch">
        <PanelContent chosenPanel="watch">
          <SelectFilter
            title="watch"
            options={sortingOptions}
            changedFilter="sort"
            optionsId="id"
            optionsName="option"
            OptionsValue="value"
          />
        </PanelContent>
      </FilterPanel>
      {/* Filters Panel */}

      <FilterPanel title="Filters" chosenPanel="filter">
        {/* Availabilities Filter */}

        <PanelContent chosenPanel="filter">
          <InputSelectFilterWrapper
            filterText="Availabilities"
            firstOption="Search all availabilities?"
            chosenFilter="watchType"
          >
            <FilterOptionsInput
              options={availabilities}
              chosenFilter="watchType"
            />
          </InputSelectFilterWrapper>
        </PanelContent>
        {/* Release Dates Filter */}

        <PanelContent chosenPanel="filter">
          <InputSelectFilterWrapper
            filterText="Release Dates"
            firstOption="Search all Releases?"
            chosenFilter="releaseType"
          >
            <>
              <InputSelectFilterWrapper
                filterText=""
                firstOption="Search all Countries?"
                chosenFilter="country"
              >
                <SelectFilter
                  title=""
                  options={countries}
                  changedFilter="country"
                  optionsId="iso_639_1"
                  optionsName="english_name"
                  OptionsValue="iso_639_1"
                />
              </InputSelectFilterWrapper>
              <div style={{ marginTop: "0.75rem" }}>
                <FilterOptionsInput
                  options={releases}
                  chosenFilter="releaseType"
                />
              </div>
            </>
          </InputSelectFilterWrapper>
        </PanelContent>
        {/* Languages Filter */}

        <PanelContent chosenPanel="filter">
          <SelectFilter
            title="Lanuages"
            options={languages}
            changedFilter="language"
            optionsId="id"
            optionsName="english_name"
            OptionsValue="iso_639_1"
          />
        </PanelContent>
        {/* Date Filter */}

        <PanelContent chosenPanel="filter">
          <InputDate />
        </PanelContent>
        {/* Genres Filter */}

        <PanelContent chosenPanel="filter">
          <GenresInput />
        </PanelContent>
        {/* Keywords Filter */}

        <PanelContent chosenPanel="filter">
          <InputKeywords />
        </PanelContent>
      </FilterPanel>
      {/* Submit Button */}

      <SubmitButton />
    </FilterContainer>
  );
}
