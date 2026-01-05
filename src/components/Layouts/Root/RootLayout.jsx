import React from 'react';
import Navbar from '../../Home/HomeComponents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Home/HomeComponents/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;