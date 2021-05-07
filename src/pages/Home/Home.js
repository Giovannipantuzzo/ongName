import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <div></div>
          <img
            className="d-block w-50"
            src="./images/dogHome1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Card.Text></Card.Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Card.Text></Card.Text>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
