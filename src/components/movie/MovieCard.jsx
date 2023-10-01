import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import skeleton from "assets/skeleton.gif";
import Menu from "assets/menu.svg";
import MenuBlue from "assets/menuBlue.svg";
import {
  Card,
  CardImg,
  CardContent,
  CardTitle,
  Date,
  RatingContainer,
  MenuIcon,
} from "components/movie/movieStyles";

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
  const [subMenuHover, setSubMenuHover] = useState(false);
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
      <MenuIcon
        src={!subMenuHover ? Menu : MenuBlue}
        onMouseEnter={() => {
          setSubMenuHover(true);
        }}
        onMouseLeave={() => {
          setSubMenuHover(false);
        }}
      />
      <CardImg
        src={
          img
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${img}`
            : skeleton
        }
        loading="lazy"
        alt={img ? "img" : "skeleton"}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
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
      </CardContent>
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
