import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <section>
            <div className='sticky top-0 z-10 w-full'
                style={{
                    backgroundColor: '#181123',

                }}
            >

                <div className="navbar  homepart lg:p-8 ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow homepart rounded-box w-52">
                                <li className='font-bold'><Link to="/home"></Link></li>
                                <li className='font-bold link-hover' tabIndex={0}>
                                    <Link to="/">Media</Link>
                                </li>
                                <li className='font-bold link-hover'><Link to="/">Message</Link></li>
                                <li className='font-bold link-hover'><Link to="/">About</Link></li>
                            </ul>
                        </div>
                        {/* <Link to='/' className='nameTitle text-xl lg:text-3xl ml-1'>Md <span className='text-violet-500'>Mustafijur</span> Rahman <span className='text-violet-500'>Munna</span></Link> */}
                        {/* <p className='text-black'>hello world</p> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li className='font-bold'><Link to="/home"></Link></li>
                            <li className='font-bold link-hover' tabIndex={0}>
                                <Link to="/media">Media</Link>
                            </li>
                            <li className='font-bold link-hover'><Link to="/message">Message</Link></li>
                            <li className='font-bold link-hover'><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div className="flex-none gap-2 navbar-end">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-full" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between"> Profile</Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;