import React from 'react';
import BestTour from '../components/BestTour';
import FindTravel from '../components/FindTravel';
import FormBook from '../components/FormBook';
import FullScreenImage from '../components/FullScreenImage';
import OurExperience from '../components/OurExperience';
import PartUn from '../components/PartUn';
import SimpleSlider from '../components/SimpleSlider';


const index = () => {
  return (
    <div className='container'>
       <div className="logo"><img src="Logo.svg" alt="" /></div>
      <PartUn />
      <FormBook />
      <SimpleSlider />
      <FindTravel />
      <OurExperience />
      <BestTour />
      <FullScreenImage />
    </div>
  );
};

export default index;