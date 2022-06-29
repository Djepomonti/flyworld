import React from 'react';

const CarteBest = () => {
    return (
        <div className="cardack">
        <div className="photopack1">
            <div className="prixpack"> <p className='prixcartouche'>25 000 frs</p> </div>
        </div>
        <h3>Magnifique Couché De soleil Sur Le Lac</h3>
        <div className="infopack">
        <div><p><img src="time.png" alt="" /> 7J/6N</p> </div>
        <div><p><img src="people.png" alt="" /> Personnes: 5</p></div>
        <div><p><img src="lieu.png" alt="" /> Nouméa</p></div>
        </div>
        <div className="packetoiles">
            <div className="etoilespack"><img src="etoilenote.png" alt="star" /><img src="etoilenote.png" alt="star" /><img src="etoilenote.png" alt="star" /><img src="etoilenote.png" alt="star" /><img src="etoilenote.png" alt="star" /> <p>5.0</p></div> <p>(2.5k votes)</p>
        </div>
         <p className='textecardpack'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cumque id veniam at sit quod. Laboriosam culpa beatae nobis eum</p>
        <button className='btncall'>Réservez</button>

    </div>
    );
};

export default CarteBest;