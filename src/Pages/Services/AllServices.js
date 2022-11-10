import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view'


const AllServices = ({ service }) => {
    const { title, image_url, details, price, _id } = service;

    return (
        <div>
            <div className="mx-auto my-5">
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
                    <Button href={`/services/${_id}`} gradientDuoTone="purpleToPink" className=' mx-24 py-2 rounded-4'>See Details</Button>
                </Card>
            </div>
        </div>
    );
};

export default AllServices;