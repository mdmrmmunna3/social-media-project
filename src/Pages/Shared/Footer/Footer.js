import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/home" className="link link-hover">Home</Link>
                    <Link to="/media" className="link link-hover">Media</Link>
                    <Link to="/about" className="link link-hover">About</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaFacebook></FaFacebook></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaGithub></FaGithub></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaTwitter></FaTwitter></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaInstagram></FaInstagram></Link>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Munna</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;