import styled from "@emotion/styled";

export const Container = styled.label`
  display: inline-flex;
  width: 100%;
`;
export const InputCheckbox = styled.input`
  cursor: pointer;
  min-width: 1rem;
`;
export const Label = styled.label`
  cursor: pointer;
  display: inline;
  font-size: 1rem;                                
  margin: 0.1875rem 0.25rem; 0 0;
  position: relative;
`;

export const Title = styled.h3`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
`;

export const PanelWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 16.25rem;
  border: 1px solid #e3e3e3;
  border-radius: 0.5rem;
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.0625rem 1rem;
  width: 100%;
`;

export const PanelTitle = styled.h2`
  display: inline-flex;
  font-size: 1.1em;
  justify-content: space-between;
  padding-right: 0.625rem;
  width: 100%;
`;

export const ArrowIcon = styled.img`
  cursor: pointer;
  height: 1rem;
  transform: ${(props) => (props.open ? "rotate(90deg);" : "")};
  width: 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Genre = styled.div`
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

export const InputDateContainer = styled.div`
  display: flex;
  margin: 0.625rem auto;

  .date_picker {
    height: 1.875rem;
    width: 100%;
  }
`;

export const DateLabel = styled.label`
  color: #a4a4a4;
  cursor: pointer;
  display: inline;
  font-size: 0.9rem;
  margin: 0.5875rem 1.25rem 0 0;
  position: relative;
  width: 3.1875rem;
`;

export const DateContainer = styled.div`
  width: 100%;
`;

export const CheckboxFilterContainer = styled.label`
  box-sizing: border-box;
  display: inline-flex;
  width: 100%;
`;
export const MainCheckboxInput = styled.input`
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.0625rem;
  display: inline-block;
  height: 1rem;
  line-height: initial;
  min-width: 1rem;
  width: 1rem;
`;

export const PanalContent = styled.div`
  border-top: 0.0625rem solid #eee;
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 0 1rem 1rem;
  width: 260px;
  @media (max-width: 1024px) {
    margin-top: 0;
    width: 100%;
  }
`;

export const Select = styled.select`
  background-color: #ced3db;
  border-radius: 0.25rem;
  border: 0;
  font-size: 0.9em;
  padding: 0.375rem 0.75rem;
  width: 100%;
`;

export const Search = styled.button`
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
