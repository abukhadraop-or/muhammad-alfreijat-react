import styled from "@emotion/styled";

export const Card = styled.div`
  align-content: flex-start;
  border-radius: 0.5rem;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  max-height: 25rem;
  position: relative;
  top: 0;
  width: 11.25rem;
`;

export const CardImg = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  height: 17.0625rem;
  width: 100%;
`;

export const CardContent = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 1.625rem 0.625rem 0.75rem;
  position: relative;
  white-space: normal;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.125rem 0;
  overflow: hidden;
  overflow-wrap: break-word;
  width: 100%;

  &:hover {
    color: #01b4e4;
  }
`;

export const Date = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  margin: 0;
  padding: 0;
`;

export const RatingContainer = styled.div`
  font-weight: 600;
  height: 2.375rem;
  position: absolute;
  top: -25%;
  width: 2.375rem;
`;

export const MenuIcon = styled.img`
  opacity: 0.7;
  position: absolute;
  top: 2%;
  left: 80%;
  width: 26px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const LoadButton = styled.button`
  align-items: center;
  border-radius: 0.625rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.2rem;
  font-weight: 600;
  height: 3.125rem;
  justify-content: center;
  line-height: 1;
  max-width: 62.5rem;
  width: 100%;
  background-color: #01b4e4;
  &:hover {
    color: #032541;
  }
`;

export const MoviesFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const NoItemDiv = styled.div`
  height: 60vh;
  width: 60vw;
`;
