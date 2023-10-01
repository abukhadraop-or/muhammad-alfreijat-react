import styled from "@emotion/styled";

const PanalContent = styled.div`
  border-top: 0.0625rem solid #eee;
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 0 1rem 1rem;
  width: 260px;
  @media (max-width: 1024px) {
    margin-top: 0;
    width: 100%;
  }
`;

export default PanalContent;
