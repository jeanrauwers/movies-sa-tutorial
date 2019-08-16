import React, { useEffect, useState } from "react";
import ModalComponent from "./Modal";
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
  const trendingMovieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const [movieArr, setMovieArr] = useState([]);
  const [modalSelectedMovie, setModalSelectedMovie] = useState();
  const [modalInitialState, setModalInitialState] = useState(false);

  useEffect(() => {
    dataFetcher(trendingMovieUrl, setMovieArr);
  }, [trendingMovieUrl]);

  return (
    <>
      <Header title={"Movie SA"} />
      <div className="movies-grid-container ">
        {movieArr.length > 0
          ? movieArr.map((itemMovie, index) => {
              return (
                <Movie
                  key={index}
                  setModalInitialState={setModalInitialState}
                  itemMovie={itemMovie}
                  setModalSelectedMovie={setModalSelectedMovie}
                />
              );
            })
          : ""}
      </div>
      <ModalComponent
        modalState={modalInitialState}
        setModalState={setModalInitialState}
        modalSelectedMovie={modalSelectedMovie}
      />
    </>
  );
}

export default App;
