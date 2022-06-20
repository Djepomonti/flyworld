import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
<>
<Header />
<Navbar />
<main>{children}</main>
</>
    );
};

export default Layout;