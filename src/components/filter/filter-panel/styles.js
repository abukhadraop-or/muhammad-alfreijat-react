import styled from "@emotion/styled";

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
