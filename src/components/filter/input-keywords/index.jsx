import fetchKeywords from "utils/fetchKeywords";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import selectFilter from "utils/selectFilter";
import Title from "components/filter/input-keywords/styles";
import useFeatures from "hooks/useFeature";

const { Option } = Select;

/**
 * InputKeywords component allows users to select keywords for filtering.
 */
function InputKeywords() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const { filter, setFilter } = useFeatures();

  /**
   * Search for keywords based on the input value.
   * @param {string} inputValue - The input value to search for keywords.
   */
  const searchKeywords = async (inputValue) => {
    const keywords = await fetchKeywords(inputValue);
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

      <Title>Keywords</Title>
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
