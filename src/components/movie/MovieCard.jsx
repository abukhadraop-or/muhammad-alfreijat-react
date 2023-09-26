import React from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import skeleton from "assets/skeleton.gif";

const Card = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  max-height: 25rem;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  overflow: hidden;
  width: 11.25rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: 273px;
`;

const Content = styled.div`
  width: 100%;
  padding: 26px 10px 12px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1rem;
  width: 100%;
  overflow-wrap: break-word;
  font-weight: 600;
  margin: 0 0 2px 0;
  padding: 0;

  &:hover {
    color: #01b4e4;
  }
`;

const Date = styled.p`
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const RatingContainer = styled.div`
  width: 38px;
  height: 38px;
  position: absolute;
  top: -25%;
  font-weight: 600;
`;

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

// { img, title, date, rating }
