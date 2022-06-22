import React from 'react';

const FormBook = () => {
    return (
<form className='form-inline' action="#!">
  <select className='soflow' id="location" name="location">
  <option>Lieu</option>
  <option>Venise</option>
  <option>Sao Polo</option>
</select>
  <select className='soflow' id="location" name="location">
  <option>Jour/Nuit</option>
  <option>Jour</option>
  <option>Nuit</option>
</select>
  <select className='soflow' id="location" name="location">
  <option>Nombres de personnes</option>
  <option>- de 3</option>
  <option>- de 5</option>
</select>

  <button className='booking-form--submit'>Book Now</button>
</form>
    );
};

export default FormBook;

