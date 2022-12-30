import React from 'react';
import { FaRegThumbsUp, FaUser } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { IoBookmarkOutline, IoChatboxOutline, IoShareSocialOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';

const UserPostDataDetails = () => {
    const postedDataDetails = useLoaderData();
    const { authorImg, authorName, postImage, postTime, mediaText } = postedDataDetails;
    console.log(postedDataDetails);
    return (
        <section>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-6 my-5 gap-5'>
                <div className='hidden md:block'>
                    <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/home" className='flex items-center'> <HiHome className='mr-2 text-3xl'></HiHome> Home</Link> </li>
                    <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/media" className='flex items-center'> <HiComputerDesktop className='mr-2 text-3xl'></HiComputerDesktop> Media</Link> </li>
                    <li className='list-none py-2 rounded-lg pl-4 btn-ghost'> <Link to="/about" className='flex items-center'> <FaUser className='mr-2 text-3xl'></FaUser> About</Link> </li>
                </div>
                <div>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src={authorImg} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <Link className="text-sm font-semibold">{authorName}</Link>
                                <span className="text-sm dark:text-gray-400">{`${postTime?.time}, ${postTime?.date}`}</span>
                            </div>
                        </div>

                        <div>
                            <img src={postImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                            <p>{mediaText}</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="space-x-2">

                                <button aria-label="Share this post" type="button" className="p-2 text-center">
                                    <FaRegThumbsUp></FaRegThumbsUp>
                                    {/* <span>{likes?.length}</span> */}
                                </button>
                                <button aria-label="Bookmark this post" type="button" className="p-2">
                                    <IoChatboxOutline></IoChatboxOutline>
                                </button>
                            </div>
                            <div className="flex space-x-2 text-sm dark:text-gray-400">
                                <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <IoShareSocialOutline></IoShareSocialOutline>

                                </button>
                                <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <IoBookmarkOutline></IoBookmarkOutline>
                                </button>
                            </div>
                        </div>
                        <div className='flex '>
                            <input type="text" placeholder="Write an answer..." className="input input-bordered w-full rounded-2xl" />
                            <button className='btn ml-2'>Comment</button>
                        </div>
                    </div>
                </div>
                <div></div>
            </section>
        </section>
    );
};

export default UserPostDataDetails;