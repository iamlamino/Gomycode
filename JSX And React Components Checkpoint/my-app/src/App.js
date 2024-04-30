//Css file import
import "./App.css";
//We use these two hooks so we can provide a prompt for the user to pick a name
//So to avoid a prompt at every rendering we are going to make a higherlevel react function wich is use effect
import { useState, useEffect } from "react";

// Components impport for the product informations;
import Price from "./Price";
import ProductName from "./ProductName";
import Description from "./Descriprion";
import Image from "./Image";
//React Bootstrap import
import { Card, Col, Button } from "react-bootstrap";
import product from "./product";

function App() {
  //we use this state to handle the firstname state
  const [firstName, setFirstName] = useState("");

  //we use this state to handle a click, so we can change thème
  const [buttonClicked, setButtonClicked] = useState(false);

  //Thi is the name that will be displayed in the footer card
  //So here we re using the useEffect hook as told earlier
  useEffect(() => {
    const name = prompt("Enter your first name:");
    if (name) {
      setFirstName(name);
    }
  }, []);

  //here we create a handleSetName function that we will use letter in case the
  //user didn't enter any name and want to add a name

  const handleSetName = () => {
    const name = prompt("What is your name? : ");
    if (name) {
      setFirstName(name);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        <Card
          //so here its the theme style whether the button is on true or false
          style={{
            width: "18rem",
            color: buttonClicked ? "black" : "white",
            backgroundColor: buttonClicked ? "white" : "black",
          }}
        >
          {
            //if the user gives a name, the card will display with the image if not, it will remain empty

            firstName && firstName !== "" ? (
              <Image product={product}></Image>
            ) : (
              <p> </p>
            )
          }

          <Button
            style={{ borderRadius: "0px 0px 0px 0px" }}
            //our button is here
            onClick={() => setButtonClicked(!buttonClicked)}
          >
            Change color
          </Button>

          <Card.Body>
            <Card.Title>
              <ProductName product={product}></ProductName>
            </Card.Title>
            <Card.Text>
              <Price product={product}></Price>
            </Card.Text>
            <Card.Text>
              <Description product={product}></Description>
            </Card.Text>
          </Card.Body>
          <br />
          {firstName && firstName !== "" ? (
            <>
              <p
                className="footer"
                style={{
                  color: buttonClicked ? "white" : "black",
                  backgroundColor: buttonClicked ? "black" : "white",
                }}
              >
                Hello my name is {firstName}{" "}
              </p>
              <Button
                style={{ borderRadius: "0px 0px 0px 0px" }}
                onClick={handleSetName}
              >
                Change Name
              </Button>
            </>
          ) : (
            <Button
              style={{ borderRadius: "0px 0px 0px 0px" }}
              onClick={handleSetName}
            >
              Click here to provide a name if you want to see the picture
            </Button>
          )}
        </Card>
      </div>
    </>
  );
}

export default App;
