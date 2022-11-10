import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            {
                reviews.map(review => <AllReviews
                    key={review._id}
                    review={review}
                ></AllReviews>)
            }

        </div>
    );
};

export default Reviews;