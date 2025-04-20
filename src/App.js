import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState([]);
  // get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=22e70cdaca91efb3fc811d77b8398922&language=en-US"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  // get Current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=22e70cdaca91efb3fc811d77b8398922&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  // search
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=22e70cdaca91efb3fc811d77b8398922&query=${word}&language=en-US`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <React.Fragment>
      <Navbar search={search} />
      <div className="list">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <MoviesList
                    movies={movies}
                    getPage={getPage}
                    pageCount={pageCount}
                  />
                }
              />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
