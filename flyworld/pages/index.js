import React from 'react';
import FormBook from '../components/FormBook';
import PartUn from '../components/PartUn';
import SimpleSlider from '../components/SimpleSlider';


const index = () => {
  return (
    <div className='container'>
       <div className="logo"><img src="Logo.svg" alt="" /></div>
      <PartUn />
      <FormBook />
      <SimpleSlider />
    </div>
  );
};

export default index;