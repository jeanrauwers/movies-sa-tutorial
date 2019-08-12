import React, { useEffect, useState } from "react";
import Header from "./Header";
import API_KEY from "../api-config";
import Movie from "./Movie";

const dataFetcher = async (url, setMovieArr) => {
  const request = await fetch(url);
  const data = await request.json();

  setMovieArr(data.results);
  console.log(data.results);
  return data;
};

function App() {
  const trendingMovisUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    dataFetcher(trendingMovisUrl, setMovieArr);
  }, [trendingMovisUrl]);

  return (
    <div className="App">
      <Header title={"Movie SA"} />
      {movieArr.length > 0
        ? movieArr.map((itemMovie, index) => {
            return (
              <Movie
                key={index}
                movieTitle={itemMovie.original_title}
                movieImageUrl={itemMovie.backdrop_path}
              />
            );
          })
        : ""}
    </div>
  );
}

export default App;
