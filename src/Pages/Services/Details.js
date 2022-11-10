import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostReviews from '../Reviews/PostReviews';
import Reviews from '../Reviews/Reviews';

const Details = () => {
    const course = useLoaderData();
    const { title, details, image_url, price } = course;

    return (
        <div>
            <div className="">
                <Card className='mx-auto my-5'
                    horizontal={true}>
                    <img src={image_url} alt="" />
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <h1 className='text-2xl'>{price}</h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                </Card>
            </div>
            <Reviews></Reviews>
            <PostReviews></PostReviews>
        </div>
    );
};

export default Details;