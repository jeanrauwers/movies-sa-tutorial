import React from "react";

const MovieTitle = ({ title, name }) => {
  return <div>{title ? title : name}</div>;
};

export default MovieTitle;
