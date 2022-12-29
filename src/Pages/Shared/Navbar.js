import React, { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import mLogo from '../../assets/logo/textM.png'
import './Navbar.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const userLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    }

    return (
        <section>
            <div className='sticky top-0 z-10 w-full'
            // style={{
            //     backgroundColor: '#181123',

            // }}
            >

                <div className="navbar lg:p-8 link-style " >
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow link-style text-white rounded-box w-52">
                                <li className='font-bold link-hover'><Link to="/home">Home</Link></li>
                                <li className='font-bold link-hover'>
                                    <Link to="/">Media</Link>
                                </li>
                                <li className='font-bold link-hover'><Link to="/">Message</Link></li>
                                <li className='font-bold link-hover'><Link to="/">About</Link></li>
                                {
                                    user?.uid ? <li onClick={userLogOut} className='font-bold link-hover'><Link to="/login">LogOut</Link></li>
                                        :
                                        <li className='font-bold link-hover'><Link to="/login">Login</Link></li>
                                }
                            </ul>
                        </div>
                        <Link to="/"> <img className='w-80' src={mLogo} alt="" /> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex" >
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li className='font-bold link-hover'><Link to="/home">Home</Link></li>
                            <li className='font-bold link-hover' >
                                <Link to="/media">Media</Link>
                            </li>
                            <li className='font-bold link-hover'><Link to="/message">Message</Link></li>
                            <li className='font-bold link-hover'><Link to="/about">About</Link></li>
                            {
                                user?.uid ? <li onClick={userLogOut} className='font-bold link-hover'><Link to="/login">LogOut</Link></li>
                                    :
                                    <li className='font-bold link-hover'><Link to="/login">Login</Link></li>
                            }
                        </ul>
                    </div>

                    <div className="flex-none gap-2 navbar-end">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-full" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.uid ? <img src={user?.photoURL} alt="user_Photo" />
                                            : <FaRegUserCircle className='w-full h-full text-white'></FaRegUserCircle>
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between"> Profile</Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link to='/login'>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;