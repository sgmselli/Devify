import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Layout({children}) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout;