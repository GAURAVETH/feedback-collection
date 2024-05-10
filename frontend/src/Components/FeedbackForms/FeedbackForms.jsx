import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Image1 from "../../assets/ProductReview.png";
import Image2 from "../../assets/ClientReview.png";
import Image3 from "../../assets/WebsiteReview.png";


const FeedbackLinks = [
    {
        id: 1,
        name: "Product Review",
        link: "/productreview",
        image: Image1
    },
    {
        id: 2,
        name: "Client Review",
        link: "/clientreview",
        image: Image2
    },
    {
        id: 3,
        name: "Website Review",
        link: "/websitereview",
        image: Image3
    }
];

const FeedbackForms = () => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 height mx-10">
      {FeedbackLinks.map(({ id, name, link, image }) => (
        <Link key={id} to={link} className="hover:no-underline">
          <div className="flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-lg font-semibold mb-5" style={{ fontSize: '25px' }}>{name}</h1>
            <img src={image} alt={name} className="mb-2" style={{ width: '400px', height: '400px' }} />
            <p className="text-zinc-700 dark:text-zinc-300 pt-5">{name} content goes here...</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default FeedbackForms;
