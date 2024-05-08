import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const FeedbackLinks = [
    {
        id: 1,
        name: "Product Review",
        link: "/product-review",
        image: "/path/to/product-review-image.jpg"
    },
    {
        id: 2,
        name: "Client Review",
        link: "/client-review",
        image: "/path/to/client-review-image.jpg"
    },
    {
        id: 3,
        name: "Marketing Review",
        link: "/marketing-review",
        image: "/path/to/marketing-review-image.jpg"
    }
];

const FeedbackForms = () => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 height mx-10">
      {FeedbackLinks.map(({ id, name, link, image }) => (
        <Link key={id} to={link} className="hover:no-underline">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <img src={image} alt={name} className="mb-2" />
            <p className="text-zinc-700 dark:text-zinc-300">{name} content goes here...</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default FeedbackForms;
