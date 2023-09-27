import React from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import skeleton from "assets/skeleton.gif";

const Card = styled.div`
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
  overflow: hidden;
  position: relative;
  top: 0;
  width: 11.25rem;
`;

const Img = styled.img`
  height: 17.0625rem;
  width: 100%;
`;

const Content = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 1.625rem 0.625rem 0.75rem;
  position: relative;
  white-space: normal;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.125rem 0;
  overflow-wrap: break-word;
  width: 100%;

  &:hover {
    color: #01b4e4;
  }
`;

const Date = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  margin: 0;
  padding: 0;
`;

const RatingContainer = styled.div`
  font-weight: 600;
  height: 2.375rem;
  position: absolute;
  top: -25%;
  width: 2.375rem;
`;
/**
 * MovieCard component displays information about a movie, including an image, title, date, and rating.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.img - The image URL for the movie.
 * @param {string} props.title - The title of the movie.
 * @param {number|string} props.rating - The rating of the movie.
 * @param {string} props.date - The release date of the movie.
 */
function MovieCard({ img, rating, title, date }) {
  const precentage = rating * 10;
  let textPrecentage = precentage;
  let pathColor;
  let trialColor;
  if (precentage >= 70) {
    textPrecentage += "%";
    pathColor = "#21C875";
    trialColor = "#204529";
  } else if (precentage < 70 && precentage >= 40) {
    textPrecentage += "%";
    pathColor = "#D2D531";
    trialColor = "#3E3B10";
  } else if (precentage) {
    textPrecentage += "%";
    pathColor = "#DB2360";
    trialColor = "#571435";
  } else {
    textPrecentage = "NR";
    pathColor = "#666666";
    trialColor = "#666666";
  }
  /**
   * Format a date string in the "yyyy-MM-dd" format to a more human-readable format.
   *
   * @param {string} inputDate - The date in "yyyy-MM-dd" format.
   * @returns {string} The formatted date in "MMM dd, yyyy" format.
   */
  const formatDate = (inputDate) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (!inputDate) {
      return inputDate;
    }

    const parts = inputDate.split("-");
    if (parts.length === 3) {
      const year = parts[0];
      const month = months[parseInt(parts[1], 10) - 1];
      const day = parts[2];
      return `${month} ${day}, ${year}`;
    }
    return inputDate;
  };

  return (
    <Card>
      <Img
        src={
          img
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${img}`
            : skeleton
        }
        loading="lazy"
        alt={img ? "img" : "skeleton"}
      />
      <Content>
        <Title>{title}</Title>
        <Date>{formatDate(date)}</Date>
        <RatingContainer>
          <CircularProgressbar
            value={precentage}
            text={textPrecentage}
            background
            styles={buildStyles({
              backgroundColor: "#081C22",
              pathColor: `${pathColor}`,
              textColor: "#FFFFFF",
              trailColor: trialColor,
              textSize: "30px",
            })}
          />
        </RatingContainer>
      </Content>
    </Card>
  );
}
MovieCard.defaultProps = {
  img: "",
  rating: "",
  title: "",
  date: "",
};

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  date: PropTypes.string,
};

export default MovieCard;
