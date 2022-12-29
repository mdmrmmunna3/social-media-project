import React from 'react';
import { Outlet } from 'react-router-dom';
import MediaPost from '../Home/SideMenu/MediaPost/MediaPost';
import Slider from '../Home/Slider/Slider';

const AllPostInfo = () => {
    return (
        <section >
            <Slider></Slider>
            <MediaPost></MediaPost>

        </section>
    );
};

export default AllPostInfo;