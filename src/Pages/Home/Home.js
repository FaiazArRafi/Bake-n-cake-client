import { Button, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import AllServices from '../Services/AllServices';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto'>
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
            <div className='mx-auto my-5'>
                {
                    services && services.slice(0, 3).map(service => <AllServices
                        key={service._id}
                        service={service}
                    ></AllServices>)
                }
                <div className='mx-auto '>
                    <Button href={`/services`} className='mx-auto mb-5 w-1/4 text-2xl' gradientDuoTone="greenToBlue" ><span className='text-2xl'>See All</span></Button>
                </div>
            </div>
        </div>
    );
};

export default Home;