import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`https://bake-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review ?');
        if (proceed) {
            fetch(`https://bake-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully !!!');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://bake-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const approving = reviews.find(review => review._id === id);

                    const newReview = [approving, ...remaining];
                    setReviews(newReview);
                }
            })
    }

    return (
        <div>
            {
                reviews.map(review => <MyReviewDetails
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                ></MyReviewDetails>)
            }


        </div>
    );
};

export default MyReviews;