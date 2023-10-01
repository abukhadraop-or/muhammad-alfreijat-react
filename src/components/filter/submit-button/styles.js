import styled from "@emotion/styled";

const Search = styled.button`
  align-items: center;
  background-color: #01b4e4;
  border-radius: 2.5rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.2rem;
  font-weight: 600;
  height: 2.75rem;
  justify-content: center;
  line-height: 1;
  width: 16.25rem;
  &:hover {
    background-color: #032541;
  }
  &:disabled {
    background-color: #ececec;
    cursor: default;
    color: #767676;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default Search;
