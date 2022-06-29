import React from 'react';
import Img1 from '../img/img1.jpg';



const FullScreenImage = () => {
    const data = [
        {
            id:1,
            imgSrc: Img1,
        },


    ]
    return (
        <>
        <div className="gallery">
            {data.map((item, index) =>{
                return(
                    <div className="pics" Key={index}>
                    <img src={item.imgSrc} style={{width:'100%'}}/>
                    </div>
                )
            })}
        </div>
        </>

    );
};

export default FullScreenImage;