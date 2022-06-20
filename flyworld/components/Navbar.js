import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        
        <nav className='navbar'>
        <ul>
            <li> <Link href="/">Accueil</Link> </li>
            <li> <Link href="/apropos">A Propos</Link> </li>
            <li> <Link href="/destination">Destination</Link></li>
            <li> <Link href="/tourpackage">Tour Package</Link></li>
            <li> <Link href="/blogs">Blogs</Link></li>
            <li> <Link href="/contact">Contact</Link></li>
            <li> <Link href="/tourpackage"> Voir les Tours</Link></li>
        </ul>

        </nav>
    );
};

export default Navbar;