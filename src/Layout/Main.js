import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <section>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </section>
    );
};

export default Main;