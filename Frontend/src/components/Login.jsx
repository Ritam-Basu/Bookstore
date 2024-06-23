import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
    const onSubmit = (data) => {
        console.log(data);
        // Add your form submission logic here (e.g., API call)
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button type="button" onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border-rounded-md"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border-rounded-md"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
                        </div>
                        <div className="flex justify-around mt-4">
                            <p>Not registered? 
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">SignUp</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
