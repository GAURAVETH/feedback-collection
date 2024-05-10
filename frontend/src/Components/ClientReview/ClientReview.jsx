import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import RatingComponent from '../RatingComponent/RatingComponent';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ClientReview = () => {
    const [clientname, setName] = useState('');
    const [clientemail, setEmail] = useState('');
    const [clientrating, setRating] = useState(0); 
    const [clientfeedback, setFeedback] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/clientReview", { clientname, clientemail, clientrating, clientfeedback })
            .then(result => {
                console.log(result);
                alert("Your feedback was successfully uploaded");
                navigate('/feedbackforms');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="h-screen">
            <Navbar />
            <div className='flex flex-col h-screen  justify-center items-center' style={{ height: "calc(100vh - 10vh)" }}>

                <div className='p-6 max-w-lg mx-auto rounded-md shadow-md'>
                    <h2 className="text-2xl font-semibold mb-4">Client Feedback Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={clientname}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={clientemail}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <RatingComponent
                                rating={clientrating}
                                onChange={setRating}
                            />
                        </div>

                        <div>
                            <label htmlFor="feedback" className="block">Feedback:</label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                value={clientfeedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
