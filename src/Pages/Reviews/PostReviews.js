import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PostReviews = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photo = user?.photoURL || 'unregistered';
        const message = form.message.value;

        const review = {
            product_id: _id,
            productName: title,
            customer: name,
            email,
            photo,
            message
        }

        fetch('https://bake-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();

                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className='my-5 border rounded-lg mx-auto py-2 px-8 bg-pink-100'>
                <h1 className='text-3xl text-center'>Review</h1>
                <form className='mx-auto' onSubmit={handleReview}>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="large"
                                value="Product Name"
                            />
                        </div>
                        <TextInput
                            id="large"
                            type="text"
                            className='px-10'
                            sizing="lg"
                            value={title}
                            readOnly
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="small"
                                value="Product ID"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            value={_id}
                            readOnly
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="small"
                                value="Your Picture"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            name='photo'
                            defaultValue={user?.photoURL}
                            readOnly
                        />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            type="email"
                            name='email'
                            defaultValue={user?.email}
                            placeholder="name@email.com"
                            required={true}
                            shadow={true}
                            readOnly
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="small"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            name='name'
                            placeholder="name"
                            required={true}
                        />
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            name='message'
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                    </div>
                    <Button type="submit" gradientDuoTone="purpleToBlue" className='mx-auto my-2'>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PostReviews;