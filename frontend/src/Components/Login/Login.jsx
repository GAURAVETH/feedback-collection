import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "../DarkMode";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate("/home")
                } else {
                    navigate("/register")
                    alert("You are not registered to this service")
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="flex gap-4 absolute right-10 top-5">
                <h1>Dark Mode</h1>
                <div>
                    <DarkMode />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-screen font-semibold duration-500">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src={Logo} alt="Logo" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"><center>Login</center></h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="email">Email</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder='Enter Email'
                                    autoComplete='off'
                                    name='email'
                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="password">Password</label>
                                <div className="text-sm">
                                    <Link to="/forget" className="font-semibold text-indigo-600 hover:text-indigo-500 hover:border-secondary ">Forgot Password</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    placeholder='Enter Password'
                                    name='password'
                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="primary-btn w-full flex justify-center rounded-md transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2">
                            Login
                        </button>
                    </form>
                    <p className="mt-5 text-sm text-gray-500 dark:text-white">Don't have an account?</p>
                    <Link to="/register" className="w-full flex justify-center rounded-md  px-4 py-2 text-sm font-semibold secondary-btn focus:ring-2 focus:ring-offset-2">
                        Sign Up
                    </Link>
                </div>
                {/* Animated Blob */}
                <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
            </div>
        </>
    );
}

export default Login;
