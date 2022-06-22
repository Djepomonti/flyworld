import React from 'react';
import Slider from "react-slick";
import Cards from './Cards';


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };
  return (
    <div>
    <h2>Right to Left</h2>
    <Slider {...settings}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    </Slider>
  </div>
  );
};

export default SimpleSlider;

