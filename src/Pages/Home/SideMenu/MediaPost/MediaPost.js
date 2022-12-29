import React, { useContext } from 'react';
import { FcPicture } from "react-icons/fc";
import { FaRegLaugh, FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Loader from '../../../../components/Loader/Loader';
import {  useNavigate } from 'react-router-dom';

const MediaPost = () => {

    const { user, loading } = useContext(AuthContext);
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleMediaSubmit = data => {
        // e.preventDefault();
        // const form = e.target;
        // const post = form.post.value;
        // // const image = form.photo_video.value;
        // console.log(post)

        const textPost = data.textPost;

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImageData => {
                if (ImageData.success) {
                    const mediaPost = {
                        mediaText: data?.textPost,
                        postImage: ImageData?.data?.url,
                        author: user?.displayName,
                        authorImg: user?.photoURL,

                    }

                    // save to all post information on database
                    fetch("http://localhost:5000/postData", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(mediaPost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result);

                        })
                        .catch(err => {
                            console.error(err);
                        })

                    console.log(mediaPost)
                    toast.success(`${user?.displayName} your post submited successfully`);
                    reset();
                }


            })
            .catch(err => {
                console.error(err);
            })
        navigate('/media')
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <section className='grid lg:grid-cols-2 gap-4'>

            <div className="card  bg-base-100 shadow-xl ">
                <div className="card-body">
                    <div className='flex mb-4'>
                        {
                            user?.uid ? <img src={user?.photoURL} className='w-12 rounded-full mr-4' alt="" /> : <FaRegUserCircle className='w-10 h-full mr-2'></FaRegUserCircle>
                        }
                        <label htmlFor="my-modal-3" className="input input-bordered input-info text-stone-500 flex items-center w-full">What's your mind, {user?.displayName}?</label>
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
                        <form onSubmit={handleSubmit(handleMediaSubmit)} className="modal-box relative" style={{ backgroundColor: "rgb(36 37 34)" }}>
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl text-white font-bold text-center">Create Post</h3>
                            <div className='text-white flex'>
                                {
                                    user?.uid ? <img src={user?.photoURL} className='w-10 rounded-full mr-4' alt="" /> : <FaRegUserCircle className='w-10 h-full text-white'></FaRegUserCircle>
                                }
                                {
                                    user?.uid ? <h3>{user?.displayName}</h3> : <p className='ml-3'>unknown</p>
                                }
                            </div>

                            {/* normal form  */}

                            {/* <textarea name="post" className="textarea  w-full mt-3 text-white text-xl" style={{ backgroundColor: "rgb(36 37 38)" }} placeholder={`What's on your mind ${user?.displayName}`}></textarea> */}

                            {/* <div className='mt-6'>
                                <span className='text-white font-semibold mr-4'>Add to your Post</span>
                                <input type="file" name='image' className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            </div> */}

                            <textarea
                                {...register("textPost", {
                                    required: 'Write your text'
                                })
                                }
                                className="textarea  w-full mt-3 text-white text-xl" required style={{ backgroundColor: "rgb(36 37 38)" }} placeholder={`What's on your mind, ${user?.displayName}?`} />
                            {errors.textPost && <p className='text-red-600'>{errors.textPost?.message}</p>}

                            <div className="form-control block mt-6">
                                <span className='text-white font-semibold mr-4'>Add to your Post</span>
                                <input type="file"
                                    {...register("image", {
                                        required: 'upload your media'
                                    })
                                    }
                                    className="file-input file-input-bordered file-input-info w-full max-w-xs" required />
                                {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                            </div>

                            <button className='btn w-full mt-3 btn-primary text-red font-bold' >Submit</button>
                        </form>
                    </div>
                </div>

            </div>
                
            <div>

            </div>
        </section>
    );
};

export default MediaPost;