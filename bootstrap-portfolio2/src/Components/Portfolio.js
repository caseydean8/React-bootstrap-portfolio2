import React from "react";
import Carousel from "react-bootstrap/Carousel"
import subPic from "../Images/Submarine.png";
import ahoyPic from "../Images/ahoy.jpg";
import hippyPic from "../Images/hippies.jpg";

function Portfolio() {
  return (
    <div class="container content portfolio" >
      <h1>Portfolio</h1>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={subPic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Submarine</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ahoyPic}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Ahoy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hippyPic}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Crytal Vibes</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portfolio;
