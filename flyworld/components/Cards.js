import React from 'react';

const Cards = () => {
    return (
        <div className="cards">
            <div className="cardsImg">
            <img src="venise1.png" alt="photo de venise" />
                <div className="cardsText">
                <h2 className='cardTitle'>Enjoy the Beauty of the
                Rialto Bridge</h2>
                <h2 className="cardSubtitle">
                    Venezia, Italy
                </h2>
                <div className="note"> <img className='etoile' src="star.png" alt="etoile" /> 4.8</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;