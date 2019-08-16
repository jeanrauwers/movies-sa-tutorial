import React from "react";

const MovieImage = ({ movieImageUrl, movieTitle, width }) => {
  const movieSrcUrl = `https://image.tmdb.org/t/p/w500${movieImageUrl}`;

  const imageStyle = {
    width: width,
    paddingBottom: "10px"
  };

  return (
    <img src={movieSrcUrl} alt={`Movie ${movieTitle}`} style={imageStyle} />
  );
};

export default MovieImage;
