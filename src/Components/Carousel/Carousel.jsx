import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "bootstrap";
import image1 from "/public/couples.jpg"
import image2 from "/public/luggage.jpg"

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
        <img src={image1} alt="" height="350px" width="100%"/>
        </div>
        <div>
          <img src={image2} alt="" height="350px" width="100%"/>
        </div>
       
      </Slider>
    </div>
  );
}

export default CarouselPage;
