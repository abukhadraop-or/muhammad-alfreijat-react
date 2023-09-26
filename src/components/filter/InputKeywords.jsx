import useFetchKeywords from "hooks/useFetchKeywords";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styled from "@emotion/styled";

const { Option } = Select;

const H3 = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
`;
function InputKeywords() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const searchKeywords = async (inputValue) => {
    const keywords = await useFetchKeywords(inputValue);
    const filteredKeywords = keywords.filter((keyword) =>
      keyword.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredOptions(filteredKeywords);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      searchKeywords(searchText);
    }, 1000);

    return () => clearTimeout(interval);
  }, [searchText]);

  return (
    <>
      <H3>Keywords</H3>
      <Select
        mode="multiple"
        placeholder="Search and select keywords"
        value={selectedOptions}
        onChange={setSelectedOptions}
        onSearch={setSearchText}
        style={{
          width: "100%",
        }}
      >
        {filteredOptions.map((keyword) => (
          <Option key={keyword.id} value={keyword.name}>
            {keyword.name}
          </Option>
        ))}
      </Select>
    </>
  );
}

export default InputKeywords;
