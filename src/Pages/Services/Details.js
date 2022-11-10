import { Button, Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PostReviews from '../Reviews/PostReviews';
import Reviews from '../Reviews/Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { AuthContext } from '../../Context/AuthProvider';

const Details = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const { title, details, image_url, price } = course;

    return (
        <div>
            <div className="">
                <Card className='mx-auto my-5'
                    horizontal={true}>
                    <PhotoProvider>
                        <PhotoView src={image_url}>
                            <img src={image_url} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <h1 className='text-2xl'>{price}</h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                    <h1 className='mt-5 '>➤ Customer have to order at least 2 days prior to delivary date.</h1>
                    <h1>➤ Customer needs to pay half price in advanced and the rest on delivary.</h1>
                    <h1>➤ Delivary charge 100 tk will be on home delivary.</h1>
                    <h1>➤ Customers are encouraged to pick up there order by person.</h1>
                    <h1>➤ Customers can order over phone and email.</h1>
                    <Button gradientDuoTone="pinkToOrange" className=' mx-24 py-2 rounded-4'><span className='text-xl'>Order Now</span></Button>
                </Card>
            </div>

            <Reviews></Reviews>
            <div className='mx-auto my-5 flex justify-center'>
                {
                    user?.uid ?
                        <>
                            <PostReviews></PostReviews>
                        </>
                        :
                        <>
                            <Link to={'/login'} className='mx-auto my-5 text-lg'>Please <span className='underline underline-offset-1 text-sky-600 font-semibold'>Login</span> to add a review</Link>

                        </>
                }

            </div>
        </div>
    );
};

export default Details;