import React from 'react';

const PartUn = () => {
    return (
        <div className="content">
        <div className="images1">
          <div className="imgverticale"></div>
          <div className="imghorizontale"></div>
        </div>
        <div className="textestart">
          <p>Explore The world <img className='world' src="World.svg" alt="world Image" /></p>
          <h1>Let's Enjoy Your Trip <br /> With Fly World <img className='fusee' src="Launch.svg" alt="" /></h1>
          <p className='soustitre'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <button className='btncall'>Start Now</button>
        </div>
      </div>      
    );
};

export default PartUn;