import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const location=useLocation()
    const navigate=useNavigate() 
    const from=location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Successful!');
                Navigate(from,{replace:true});
                
            }
            localStorage.setItem("User", JSON.stringify(res.data.user));
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            } else {
                toast.error("Signup failed. Please try again.");
            }
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <ToastContainer />
            <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className="mt-4 space-y-2">
                            <label className="block">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("fullname", { required: "Name is required" })}
                            />
                            {errors.fullname && <span className="text-sm text-red-500">{errors.fullname.message}</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                SignUp
                            </button>
                        </div>
                        <div className="flex justify-around mt-4">
                            <p className="text-md">
                                Have an account? 
                                <Link to="/login" className="underline text-blue-500 cursor-pointer"> Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
