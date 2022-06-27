import React from 'react';
import Slider from "react-slick";
import Cards from './Cards';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Cards4 from './Cards4';
import Cards5 from './Cards5';


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
    <h2>TOP DESTINATION</h2>
    <h1 className='explore'>Explore Top Destination</h1>
    <Slider className='card'{...settings}>
        <Cards />
        <Cards2 />
        <Cards3 />
        <Cards4 />
        <Cards5 />
    </Slider>
  </div>
  );
};

export default SimpleSlider;

