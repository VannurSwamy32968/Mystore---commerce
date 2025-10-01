import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "bootstrap";

function CarouselPage() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 300,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src="public/couples.jpg" alt="" height="350px" width="100%"/>
        </div>
        <div>
          <img src="public/luggage.jpg" alt="" height="350px" width="100%"/>
        </div>
       
      </Slider>
    </div>
  );
}

export default CarouselPage;
