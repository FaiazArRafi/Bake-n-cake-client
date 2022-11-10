import { Button } from 'flowbite-react';
import React from 'react';

const MyReviewDetails = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, customer, photo, message } = review;

    return (
        <div>
            <div className='w-1/2 mx-auto border rounded-lg px-3 py-3 bg-amber-100 my-5'>

                <div className='flex justify-between items-center py-2'>
                    <div>
                        <img src={photo} alt="" className='rounded-full w-9 mr-3' />
                        <h1 className='font-semibold text-orange-500 text-lg'>{customer}</h1>
                    </div>
                    <div className='flex justify-end'>
                        <Button className='mr-2' onClick={() => handleStatusUpdate(_id)}>Edit </Button>
                        <Button onClick={() => handleDelete(_id)} color="failure" >Delete</Button>
                    </div>
                </div>
                {message}
            </div>
        </div>
    );
};

export default MyReviewDetails;