import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MediaPost from '../Home/SideMenu/MediaPost/MediaPost';
import Slider from '../Home/Slider/Slider';
import UserPostData from '../Home/UserPostData/UserPostData';

const AllPostInfo = () => {
    const { setLoading } = useContext(AuthContext)
    return (
        <section >
            {
                setLoading && <>
                    <Slider></Slider>
                    <MediaPost></MediaPost>
                    <UserPostData></UserPostData>
                </>
            }

        </section>
    );
};

export default AllPostInfo;