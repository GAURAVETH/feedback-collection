import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../AdminDashboard/Sidebar';
import DarkMode from '../DarkMode';

const User = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const isDarkMode = true;

    useEffect(() => {
        axios.get('http://localhost:3001/clients')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                setError('Error fetching users');
            });
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3001/clients/${id}`)
            .then(response => {
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(error => {
                setError('Error deleting user');
            });
    };

    return (
        <>
            <div className="flex">
                <div className=" flex gap-4 absolute right-10 top-5">
                    <DarkMode />
                </div>
                <Sidebar />
                <div className="container mx-auto mt-11">
                    {error && <p className="text-red-500">{error}</p>}
                    <table className="min-w-full table-auto">
                        <thead className="bg-zinc-800 text-white">
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} className={`bg-${isDarkMode ? 'black' : 'white'} border-b dark:bg-${isDarkMode ? 'black' : 'white'} ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                                    <td className="px-4 py-2 text-center">{user.name}</td>
                                    <td className="px-4 py-2 text-center">{user.email}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button onClick={() => deleteUser(user._id)} className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isDarkMode ? 'dark:bg-red-700' : 'dark:bg-red-500'}`}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default User;
