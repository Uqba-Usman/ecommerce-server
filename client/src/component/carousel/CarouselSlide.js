import React from "react";
import "./CarouselSlide.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function CarouselSlide() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval="3000"
      disableButtonsControls={true}
    >
      <img src="MINISOstore.jpg" alt="Image1" className="sliderimg" />
      <img src="shutterstock.jpg" alt="Image2" className="sliderimg" />
      <img src="gcrocery.jpg" alt="Image3" className="sliderimg" />
    </AliceCarousel>
  );
}

export default CarouselSlide;
