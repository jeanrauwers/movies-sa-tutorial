import React from "react";
import MovieImage from "./MovieImage";
const Movie = ({ movieTitle, movieImageUrl }) => {
  return (
    <>
      <div>{movieTitle}</div>
      <MovieImage movieTitle={movieTitle} movieImageUrl={movieImageUrl} />
    </>
  );
};

export default Movie;
