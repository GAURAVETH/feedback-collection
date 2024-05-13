import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "../DarkMode";

function AdminSignup() {

    const [adminname, setName] = useState('');
    const [adminemail, setEmail] = useState('');
    const [adminpassword, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (secretKey !== "Gaurav") {
            alert("Invalid Admin");
        } else {
            axios.post("http://localhost:3001/adminsignup", { adminname, adminemail, adminpassword })
                .then(result => {
                    console.log(result);
                    navigate("/adminlogin");
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <div className=" flex gap-4 absolute right-10 top-5">
                <h1>Dark Mode</h1>
                <DarkMode />
            </div>

            <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src={Logo} alt="Logo" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Admin Signup</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="secretKey">
                                Secret Key
                            </label>
                            <div className="mt-2">
                                <input type="text"
                                    placeholder='Enter Secret Key'
                                    autoComplete='off'
                                    id='secretKey'
                                    className='block w-full rounded-md border-0 p-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    value={secretKey}
                                    onChange={(e) => setSecretKey(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="adminname">
                                Name
                            </label>
                            <div className="mt-2">
                                <input type="text"
                                    placeholder='Enter Name'
                                    autoComplete='off'
                                    id='adminname'
                                    className='block w-full rounded-md border-0 p-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    value={adminname}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="adminemail">
                                Email
                            </label>
                            <div className="mt-2">
                                <input type="text"
                                    placeholder='Enter Email'
                                    autoComplete='off'
                                    id='adminemail'
                                    className='block w-full rounded-md border-0 p-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    value={adminemail}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="adminpassword">
                                Password
                            </label>
                            <div className="mt-2">
                                <input type="password"
                                    placeholder='Enter Password'
                                    id='adminpassword'
                                    className='block w-full rounded-md border-0 p-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    value={adminpassword}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="flex w-full justify-center rounded-md primary-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white">
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-5 text-sm text-gray-500 dark:text-white">Already have an account?</p>
                    <Link to="/adminlogin" className="flex w-full justify-center rounded-md secondary-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white">
                        Login
                    </Link>
                </div>
                {/* Animated Blob */}
                <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
            </div>
        </>
    );
}

export default AdminSignup;
