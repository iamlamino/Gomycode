import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

const MovieList = ({ movies }) => {
  const [filteredBy, setFilteredBy] = useState("title");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filterTitleValue, setFilterTitlevalue] = useState("");
  const [filterRatingValue, setFilterRatingvalue] = useState(-1);

  const filterMovies = () => {
    let newFilteredMovies = [...movies];

    if (filteredBy === "title" && filterTitleValue.trim() !== "") {
      newFilteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterTitleValue.toLowerCase())
      );
    }

    if (filteredBy === "rating" && filterRatingValue !== -1) {
      newFilteredMovies = movies.filter(
        (movie) => movie.rating === filterRatingValue
      );
    }

    setFilteredMovies(newFilteredMovies);
  };

  useEffect(() => {
    filterMovies();
  }, [filterTitleValue, filterRatingValue, movies]);

  return (
    <>
      <Filter
        filteredBy={filteredBy}
        setFilteredBy={setFilteredBy}
        filterTitleValue={filterTitleValue}
        setFilterTitlevalue={setFilterTitlevalue}
        filterRatingValue={filterRatingValue}
        setFilterRatingvalue={setFilterRatingvalue}
      />
      <div style={movieListStyle}>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </>
  );
};

const movieListStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  margin: "20px",
  marginTop: "50px",
  marginBottom: "50px",
  flexWrap: "wrap",
};

export default MovieList;
