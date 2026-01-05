import React from 'react';
import Navbar from '../../Home/HomeComponents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Home/HomeComponents/Footer';

const AuthLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayOut;