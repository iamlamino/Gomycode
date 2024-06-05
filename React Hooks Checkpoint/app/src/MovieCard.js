import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate, Link } from "react-router-dom";

function MovieCard({ id, title, description, rating, posterURL }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <Card
      className="singleCard"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body className="cardBody">
        <Card.Title className="movieTitle">{title}</Card.Title>
        <Card.Text> {description}</Card.Text>
        <Card.Text>
          <h5 style={{ textAlign: "center", marginTop: "12px" }}>Rating</h5>
          <h5
            style={{
              textAlign: "center",
              marginTop: "12px",
              color: rating >= 5 ? "green" : "red",
            }}
          >
            {rating}
          </h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieCard.defaultProps = {
  id: 5,
  title: "Unknown",
  description: "Unknown",
  rating: 0,
  posterURL:
    "https://images.unsplash.com/photo-1569229569803-69384f5efa83?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default MovieCard;
