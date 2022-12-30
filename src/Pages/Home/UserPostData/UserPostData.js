import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaRegThumbsUp } from "react-icons/fa";
import { IoBookmarkOutline, IoChatboxOutline, IoShareSocialOutline } from "react-icons/io5";


const UserPostData = () => {
    const { user } = useContext(AuthContext);
    const postedDatas = useLoaderData();

    return (
        <section>
            {
                postedDatas.map(postData => <div key={postData?._id}>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src={postData?.authorImg} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <Link className="text-sm font-semibold">{postData?.authorName}</Link>
                                <span className="text-sm dark:text-gray-400">{postData?.postTime}</span>
                            </div>
                        </div>
                        <p>{postData?.mediaText?.slice(0, 20)}... <Link className='text-orange-400 hover:text-orange-600'>Read More</Link> </p>
                        <div>
                            <img src={postData?.postImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />

                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="space-x-2">
                                <button aria-label="Share this post" type="button" className="p-2 text-center">
                                    <FaRegThumbsUp></FaRegThumbsUp>
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
                    </div>
                </div>)
            }
        </section>
    );
};

export default UserPostData;