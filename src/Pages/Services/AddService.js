import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const image_url = form.photo.value;
        const details = form.details.value;

        const service = {
            price,
            title,
            image_url,
            details
        }

        fetch('https://bake-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service addeded successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className='my-5 border rounded-lg mx-auto w-2/5 py-2 px-5'>
                <h1 className='text-3xl text-center'>Add Service</h1>
                <form className='mx-auto' onSubmit={handleReview}>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="large"
                                value="Product Title"
                            />
                        </div>
                        <TextInput
                            id="large"
                            type="text"
                            sizing="lg"
                            name='title'
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="small"
                                value="Product Price"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            name="price"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <Label
                                htmlFor="small"
                                value="Product Picture"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            name='photo'
                            required={true}
                        />
                    </div>

                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="product Details"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            name='details'
                            placeholder="details"
                            required={true}
                        />
                    </div>
                    <Button type="submit" gradientDuoTone="purpleToBlue" className='mx-auto my-2'>
                        Add Service
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddService;