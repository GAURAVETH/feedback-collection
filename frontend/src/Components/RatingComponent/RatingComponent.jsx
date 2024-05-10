import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

function RatingComponent(props) {
    const { rating, onChange } = props;
    const [hover, setHover] = useState(0);

    const handleClick = (currentRating, e) => {
        e.stopPropagation(); // Stop event propagation
        onChange(currentRating);
    };

    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex gap-10'>
                {[...Array(5)].map((_, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index} className='cursor-pointer'>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={(e) => handleClick(currentRating, e)}
                                className='hidden'
                            />
                            <AiFillStar
                                className='star dark:text'
                                size={30}
                                style={{ color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                    );
                })}
            </div>
            <p>Your rating is {rating}</p>
        </div>
    );
}

export default RatingComponent;