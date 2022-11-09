import { Carousel } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <h1>Home is this</h1>
            <div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-5">
                    <Carousel>
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Home;