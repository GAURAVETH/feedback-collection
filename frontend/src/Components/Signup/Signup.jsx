import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "../DarkMode";


function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { name, email, password })
            .then(result => {
                console.log(result)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }


    return (
        <>
        <div className=" flex gap-4 absolute right-10 top-5">
            <h1>Dark Mode</h1>
        <DarkMode />
        </div>
        
        <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto" src={Logo} alt="Logo" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Signup</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="email">
                            Name
                        </label>
                        <div className="mt-2">
                            <input type="text"
                                placeholder='Enter Name'
                                autoComplete='off'
                                name='name'
                                className='block w-full rounded-md border-0  p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="email">
                            Email
                        </label>
                        <div className="mt-2">
                        <input type="text"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='block w-full rounded-md border-0  p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor="email">
                            Password
                        </label>
                        <div className="mt-2">
                        <input type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='block w-full rounded-md border-0  p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                    </div>
                    <button type="submit" className="flex w-full justify-center rounded-md primary-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white">
                        Sign Up
                    </button>
                </form>
                <p className="mt-5  text-sm text-gray-500 dark:text-white">Already have an account?</p>
                <Link to="/login" className="flex w-full justify-center rounded-md secondary-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white">
                    Login
                </Link>

            </div>
             {/* Animated Blob */}
             <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>

        </div>
        </>
    );
}

export default Signup;