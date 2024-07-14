import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function CardComponent({ title, text, imgSrc }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="warning">Boutton</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default CardComponent;
