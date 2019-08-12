import React, { useEffect, useState } from "react";
import API_KEY from "./api-config";

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
      {movieArr.length > 0
        ? movieArr.map((itemMovie, index) => {
            return <div>{itemMovie.original_title}</div>;
          })
        : ""}
    </div>
  );
}

export default App;
