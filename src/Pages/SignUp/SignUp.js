import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { googleSignup } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleGoogleSignUp = () => {
        googleSignup();
    }

    return (
        <section
            style={{
                backgroundColor: 'rgb(31 41 55)'
            }}
            className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-white rounded-lg'>
                <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit()}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: 'name is required'
                            })
                            }
                            placeholder="name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs" required>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register('email', {
                                required: 'email is required'
                            })
                            }
                            placeholder="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 characters long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=)/, message: 'Password must have upparcase,number and special characters' }
                            })
                            }
                            placeholder="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="file"
                            {...register("image", {
                                required: 'Photo is required'
                            })
                            }
                            placeholder="Name" className="input input-bordered text-accent" />
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>


                    <input className='btn btn-accent w-full my-3 font-bold text-white' value='SignUp' type="submit" />
                    <div>
                        {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                    </div>
                </form>
                <p>Already have an account?<Link className='text-secondary' to='/login'>Please Login</Link> </p>
                <div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'><FcGoogle className='text-2xl mr-2'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
    );
};

export default SignUp;