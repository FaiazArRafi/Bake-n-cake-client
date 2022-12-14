import React, { useEffect, useState } from 'react';

const AllReviews = ({ review }) => {
    const { product_id, customer, photo, message } = review;

    const [reviewService, setReviewService] = useState({})


    useEffect(() => {
        fetch(`https://bake-server.vercel.app/services/${product_id}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [product_id])

    return (
        <div>
            <div className='w-1/2 mx-auto border rounded-lg px-3 py-3 bg-amber-100 my-4'>
                <div className='flex justify-start items-center py-2'>
                    <img src={photo} alt="" className='rounded-full w-9 mr-3' />
                    <h1 className='font-semibold text-orange-500 text-lg'>{customer}</h1>
                </div>
                {message}
            </div>
        </div>

    );
};

export default AllReviews;