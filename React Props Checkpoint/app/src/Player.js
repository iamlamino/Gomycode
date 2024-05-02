import React from "react";
import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, imageURL }) {
  return (
    <Card className="singleCard" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} alt={name} height={200} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  imageURL:
    "https://images.unsplash.com/photo-1601296200639-89349ce76a48?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image URL
};

export default Player;
