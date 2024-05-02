import React from "react";
import Player from "./Player"; // Importing the Player component
import playersData from "./players"; // Importing the players data

function PlayersList() {
  return (
    <div style={listStyle}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}
const listStyle = {
  display: "flex",
  gap: "50px",
  margin: "20px",
  marginTop: "100px",
};
export default PlayersList;
