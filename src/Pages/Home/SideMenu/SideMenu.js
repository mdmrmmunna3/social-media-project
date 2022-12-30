import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AllPostInfo from '../../AllPostInfo/AllPostInfo';
import { HiHome } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaUser } from 'react-icons/fa';


const SideMenu = () => {
    return (
        // <section >

        //     <div className="drawer drawer-mobile">
        //         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content flex flex-col">

        //             <div className="w-full navbar ">
        //                 <div className="flex-none lg:hidden">
        //                     <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost swap swap-rotate">

        //                         <input type="checkbox" />

        //                         <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

        //                         <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        //                     </label>
        //                 </div>


        //             </div>

        //             <AllPostInfo></AllPostInfo>


        //         </div>


        //         <div className="drawer-side">
        //             <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        //             <ul className="menu p-12 w-96 ">

        //                 <li><a>Sidebar Item 1</a></li>
        //                 <li><a>Sidebar Item 2</a></li>

        //             </ul>

        //         </div>
        //     </div>
        // </section>


        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-6 my-5 gap-5'>
            <div className='hidden md:block'>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link className='flex items-center'> <HiHome className='mr-2 text-3xl'></HiHome> Home</Link> </li>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link className='flex items-center'> <HiComputerDesktop className='mr-2 text-3xl'></HiComputerDesktop> Media</Link> </li>
                <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link className='flex items-center'> <FaUser className='mr-2 text-3xl'></FaUser> About</Link> </li>
            </div>
            <div>
                <AllPostInfo></AllPostInfo>
            </div>
            <div></div>
        </section>
    );
};

export default SideMenu;