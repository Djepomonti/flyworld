import React from 'react';
import CarteBest from './CarteBest';
import CarteBest2 from './CarteBest2';
import CarteBest3 from './CarteBest3';


const BestTour = () => {
    return (
     <div className="bestTourCont">
        <h2>TOP TOUR</h2>
        <h1>Les Meilleurs Tours Packages</h1>
        <div className="cardcontpack">
           <CarteBest/><CarteBest2/><CarteBest3/>
        </div>
     </div>
    );
};

export default BestTour;