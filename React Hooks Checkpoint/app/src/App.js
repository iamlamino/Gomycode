import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import moviesData from "./movies"; // Changed import name to avoid conflict
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const handleAddMovie = (newMovie) => {
    // Create a new array with the existing movies and the new movie
    console.log("On AddMovie newMoviw : ", newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        <span>|</span> Movies{" "}
      </h2>

      <MovieList movies={movies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </>
  );
}

export default App;
