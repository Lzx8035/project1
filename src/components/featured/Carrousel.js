import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_1 from "../../resources/images/slide_1.JPG";
import slide_2 from "../../resources/images/slide_2.JPG";
import slide_3 from "../../resources/images/slide_3.JPG";

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_1})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_2})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_3})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
