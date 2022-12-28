import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    return (
        <section
            style={{
                backgroundColor: 'rgb(31 41 55)'
            }}
            className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-white rounded-lg'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit()}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register("email", {
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
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: "Password must be 6 characters and longer" }
                            })}
                            placeholder="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forgot Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full mb-3' value='Login' type="submit" />
                    {/* show error message  */}
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p className='text-center'>New to Decency Fur ReSale? <Link className='text-secondary' to='/signup'> <br /> Create New Account</Link> </p>

            </div>

        </section>
    );
};

export default Login;