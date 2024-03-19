import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import HeadingComponent from "./HeadingComponent";
import CardComponent from "./CardComponent";
import paris from "./images/paris.jpg";
import brésil from "./images/brazil.jpg";
import dakar from "./images/dakar.jpg";

function App() {
  const cardsData = [
    {
      id: 1,
      title: "Paris",
      text: "Tour Eiffel",
      imgSrc: paris,
    },
    {
      id: 2,
      title: "Brésil",
      text: "Favellas",
      imgSrc: brésil,
    },
    {
      id: 3,
      title: "Dakar",
      text: "Petite cote",
      imgSrc: dakar,
    },
  ];
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Container className="mx-auto">
          <HeadingComponent />
          <Row>
            {cardsData.map((card) => (
              <CardComponent
                key={card.id}
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
