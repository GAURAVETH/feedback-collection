import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../AdminDashboard/Sidebar';
import DarkMode from '../DarkMode';
import RatingComponent from '../RatingComponent/RatingComponent';

const Product = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/product')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                setError('Error fetching users');
            });
    }, []);

    return (
        <>
            <div className="flex">
                <div className="flex gap-4 absolute right-10 top-5">
                    <DarkMode />
                </div>
                <Sidebar />
                <div className="container mx-auto mt-11">
                    {error && <p className="text-red-500">{error}</p>}
                    <table className="min-w-full table-auto">
                        <thead className="bg-zinc-800 text-white">
                            <tr>
                                <th className="px-4 py-2 w-1/4">Name</th>
                                <th className="px-4 py-2 w-1/4">Email</th>
                                <th className="px-4 py-2 w-1/4">Rate</th>
                                <th className="px-4 py-2 w-1/4">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} className="bg-white border-b dark:bg-black dark:text-white">
                                    <td className="px-4 py-2 text-center w-1/4">{user.productname}</td>
                                    <td className="px-4 py-2 text-center w-1/4">{user.productemail}</td>
                                    <td className="px-4 py-2 text-center w-1/4"><RatingComponent rating={user.productrating} /></td>
                                    <td className="px-4 py-2 text-center w-1/4">{user.productfeedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Product;