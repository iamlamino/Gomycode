import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    console.log({ id });
    return <h2>Ce film n'exite pas</h2>;
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div style={{ padding: "20px" }}>
        <Link
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
          to="/"
        >
          Retour
        </Link>
        <h2 style={{ padding: "20px" }}>{movie.title}</h2>
        <p style={{ padding: "20px" }}>{movie.description}</p>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
