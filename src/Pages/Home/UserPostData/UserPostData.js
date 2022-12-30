import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa";
import { IoBookmarkOutline, IoChatboxOutline, IoShareSocialOutline } from "react-icons/io5";


const UserPostData = () => {

    const postedDatas = useLoaderData();
    const [likeCount, setLikeCount] = useState([]);
    // const [dislikeCount, setDislikeCount] = useState();


    const handleLikeClick = (id) => {
        // fetch(`https://social-media-server-taupe.vercel.app/postData/${id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-typee": "application.json"
        //     },
        //     body: JSON.stringify({likeCount})
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //         setLikeCount(result)
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
        console.log("hlw")
    }


    return (
        <section className='mt-6'>
            {
                postedDatas.map(postData => <div key={postData?._id}>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src={postData?.authorImg} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <Link className="text-sm font-semibold">{postData?.authorName}</Link>
                                <span className="text-sm dark:text-gray-400">{`${postData?.postTime?.time}, ${postData?.postTime?.date}`}</span>
                            </div>
                        </div>
                        <p>{postData?.mediaText?.slice(0, 20)}... <Link to={`/postDataDetails/${postData?._id}`} className='text-orange-400 hover:text-orange-600'>Read More</Link> </p>
                        <div>
                            <img src={postData?.postImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />

                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="flex space-x-2 ">

                                <button onClick={() => handleLikeClick(postData?._id)} aria-label="Share this post" type="button" className="p-2 text-center flex items-center">
                                    <FaRegThumbsUp></FaRegThumbsUp>
                                    <span>{postData?.likes?.length}</span>
                                </button>
                                <button aria-label="Bookmark this post" type="button" className="p-2 flex items-center">
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
                </div>)
            }
        </section>
    );
};

export default UserPostData;