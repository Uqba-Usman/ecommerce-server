import React from "react";
import { Carousel } from "react-bootstrap";
//import image1 from "/images/parallax/3.jpg";

function CarouselContainer() {
  return (
    <Carousel fade={true} controls={false} pause={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="gcrocery.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>First slide </h3>
          <p style={{ color: "white" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="MINISOstore.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Seond slide </h3>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="shutterstock.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Third slide </h3>
          <p style={{ color: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="gcrocery.jpg" alt="Fourth slide" />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Fourth slide </h3>
          <p style={{ color: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="MINISOstore.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Fifth slide </h3>
          <p style={{ color: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
