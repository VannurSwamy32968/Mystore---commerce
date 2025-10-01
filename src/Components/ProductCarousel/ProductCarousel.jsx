import React from "react";
import Slider from "react-slick";


function ProductCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images&&images.length>0&&images.map((img, index) => (
          <div key={index} className=" d-flex justify-content-center align-items-center">
            <img 
              src={img} 
              alt={`Product ${index + 1}`} 
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
