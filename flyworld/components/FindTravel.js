import React from 'react';

const FindTravel = () => {
    return (
        <div className="findtravelcont">
            <h2 className="h2red">3 Etapes pour un voyage parfait</h2>
            <h1 className="perfecttriph1">Trouvez le Voyage parfait</h1>
            <h2 className="soustitreh2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <div className="contsteps">
                <div className="cardstep">
                    <img src="message.png" alt="message" />
                    <h2 className="titrecarte">Dites nous ce que vous voulez faire</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat </p>
                </div>
                <div className="cardstep">
                <img src="location.png" alt="location" />
                <h2 className="titrecarte">Partagez votre position</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat </p>

                </div>
                <div className="cardstep">
                <img src="calendar.png" alt="calendar" />
                <h2 className="titrecarte">Partagez vos préférences</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat </p>

                </div>
            </div>
        </div>

    );
};

export default FindTravel;