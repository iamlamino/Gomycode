import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import moviesData from "./movies";
import MovieDetail from "./MovieDetail";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        <span>|</span> Movies{" "}
      </h2>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie onAddMovie={handleAddMovie} />
      </div>
    </div>
  );
}

export default App;
