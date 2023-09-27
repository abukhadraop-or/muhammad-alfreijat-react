import useFetchKeywords from "hooks/useFetchKeywords";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styled from "@emotion/styled";
import useFilter from "hooks/useFilters";
import selectFilter from "hooks/selectFilter";

const { Option } = Select;

const H3 = styled.h3`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
`;
/**
 * InputKeywords component allows users to select keywords for filtering.
 */
function InputKeywords() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const { filter, setFilter } = useFilter();

  /**
   * Search for keywords based on the input value.
   * @param {string} inputValue - The input value to search for keywords.
   */
  const searchKeywords = async (inputValue) => {
    const keywords = await useFetchKeywords(inputValue);
    setFilteredOptions(keywords);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      searchKeywords(searchText);
    }, 500);

    return () => clearTimeout(interval);
  }, [searchText]);

  useEffect(() => {
    selectFilter("keywords", selectedOptions, filter, setFilter);
  }, [selectedOptions]);
  return (
    <>
      {/* Display the component title */}

      <H3>Keywords</H3>
      <Select
        mode="multiple"
        placeholder="Search and select keywords"
        value={selectedOptions}
        suffixIcon={false}
        onChange={setSelectedOptions}
        optionFilterProp="children"
        onSearch={setSearchText}
        style={{
          width: "100%",
        }}
      >
        {/* Display filtered keyword options */}

        {filteredOptions.map((keyword) => (
          <Option key={keyword.id} value={keyword.id}>
            {keyword.name}
          </Option>
        ))}
      </Select>
    </>
  );
}

export default InputKeywords;
