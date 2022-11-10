import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://bake-server.vercel.app/reviews`)
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