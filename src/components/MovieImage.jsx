import React from "react";

const MovieImage = ({ movieImageUrl, movieTitle }) => {
  const movieSrcUrl = `https://image.tmdb.org/t/p/w500${movieImageUrl}`;

  return (
    <img
      src={movieSrcUrl}
      alt={`This is the image for the movie ${movieTitle}`}
    />
  );
};

export default MovieImage;
