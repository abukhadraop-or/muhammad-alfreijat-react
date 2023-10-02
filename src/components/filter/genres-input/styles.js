import styled from "@emotion/styled";

export const Title = styled.h3`
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  width: 100%;
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
