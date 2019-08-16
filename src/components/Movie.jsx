import React from "react";
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";

const Movie = ({ setModalInitialState, setModalSelectedMovie, itemMovie }) => {
  const { original_title, name, backdrop_path } = itemMovie;

  const movieClickHandler = () => {
    setModalInitialState(true);
    setModalSelectedMovie(itemMovie);
  };

  return (
    <div className="movies-grid-cel" onClick={movieClickHandler}>
      <MovieTitle title={original_title} name={name} />
      <MovieImage
        movieTitle={original_title ? original_title : name}
        movieImageUrl={backdrop_path}
      />
    </div>
  );
};

export default Movie;
