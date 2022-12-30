import React from 'react';
import { FaUser } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-6 my-5 gap-5'>
            <div className='hidden md:block'>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/home" className='flex items-center'> <HiHome className='mr-2 text-3xl'></HiHome> Home</Link> </li>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/media" className='flex items-center'> <HiComputerDesktop className='mr-2 text-3xl'></HiComputerDesktop> Media</Link> </li>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/about" className='flex items-center'> <FaUser className='mr-2 text-3xl'></FaUser> About</Link> </li>
            </div>
            <div>
                <h1>updating</h1>
            </div>
            <div></div>
        </section>
    );
};

export default About;