import React from 'react';

const Header = () => {
    return (
        <div className='header'>
        <ul>
            <li> <img className='headerimg' src="mail.svg" alt="mail"/> <a>flyworld@gmail.com</a></li>
            <li>Découvrez nos destination et notre Package Tour</li>
            <li>suivez nous 
            <em><img className='headerimg' src="facebook.svg" alt="facebook" /> </em>
            <em><img className='headerimg' src="instagram.svg" alt="instagram" /></em>
            <em><img className='headerimg' src="twitter.svg" alt="twitter" /></em>
            <em><img className='headerimg' src="linkedin.svg" alt="linkedin" /></em>
            
            </li>
        </ul>
        </div>
    );
};

export default Header;