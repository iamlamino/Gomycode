import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    imageUrl: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
    if (name === "rating") parsedValue = Number(value);

    setNewMovie({
      ...newMovie,
      [name]: parsedValue,
    });
  };

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({
      title: "",
      description: "",
      imageUrl: "",
      rating: 0,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={newMovie.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newMovie.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        name="imageUrl"
        value={newMovie.imageUrl}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Rating"
        name="rating"
        value={newMovie.rating}
        onChange={handleInputChange}
        min="0"
        max="10"
        step="0.1"
      />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
