import React, { useState } from 'react';
import Star from './Star';

function StarRating({ display }) {

    const [rating, setRating] = useState(0);
    const [ratingTitle, setRatingTitle] = useState(""); 
    const ratingTitles = ["Poor", "Fair", "Good", "Very Good", "Excellent"]
  
    const handleStarClick = (index) => {
      const newRating = index + 1;
      setRating(newRating);
      setRatingTitle(ratingTitles[index]);
    };
  return (
    <section className="stars" style={{display}}>
      <span>
        {Array(5).fill().map((_, index) => (
          <Star 
            key={index} 
            filled={index < rating} 
            onClick={() => handleStarClick(index)} 
          />
        ))}
      </span>
      <p className='rating'>{ratingTitle}</p>
  </section>
  )
}

export default StarRating;
