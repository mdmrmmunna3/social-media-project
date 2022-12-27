import React from 'react';
import { FcPicture } from "react-icons/fc";
import { FaRegLaugh } from "react-icons/fa";

const MediaPost = () => {
    return (
        <section className='grid grid-cols-2'>

            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <div className='flex'>
                        <img src="https://placeimg.com/80/80/people" className='w-12 rounded-full mr-4' alt="" />
                        <label htmlFor="my-modal-3" className="input input-bordered input-info text-stone-500 flex items-center w-full">What's your mind</label>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        {/* <input type="file" className='flex '></input> */}
                        <span type="file" className='flex input file-input'><FcPicture className='text-2xl mr-2'></FcPicture> Photo/Video</span>
                        <span className='flex'><FaRegLaugh className='text-yellow-400 text-2xl mr-2'></FaRegLaugh> Activity</span>
                    </div>

                    {/* The button to open modal */}
                    {/* <label htmlFor="my-modal-3" type="text" className="input input-bordered input-info"></label> */}

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative" style={{ backgroundColor: "rgb(36 37 34)" }}>
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl text-white font-bold text-center">Create Post</h3>
                            <div className='text-white flex'>
                                <img src="https://placeimg.com/80/80/people" className='w-10 rounded-full mr-4' alt="" />
                                <h3>Name</h3>
                            </div>
                            <textarea className="textarea  w-full mt-3 text-white text-xl" style={{ backgroundColor: "rgb(36 37 38)" }} placeholder="What's on your mind"></textarea>

                            <div className='mt-6'>
                                <span className='text-white font-semibold mr-4'>Add to your Post</span>
                                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            </div>
                            <button className='btn w-full mt-2 btn-primary text-red font-bold' >Submit</button>
                        </div>
                    </div>
                </div>

            </div>

            <div>

            </div>
        </section>
    );
};

export default MediaPost;