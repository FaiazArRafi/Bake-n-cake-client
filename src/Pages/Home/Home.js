import { Button, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import AllServices from '../Services/AllServices';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://bake-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-5">
                    <Carousel>
                        <img
                            src="https://wallpapers.com/images/high/red-velvet-cupcake-tfxh6ckcyds56htf-tfxh6ckcyds56htf.jpg"
                            alt="..."
                        />
                        <img
                            src="https://images.hdqwalls.com/download/pink-birthday-cake-hd-1366x768.jpg"
                            alt="..."
                        />
                        <img
                            src="https://wallpapercave.com/wp/wp1966942.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>

            <h1 className='text-center text-5xl font-semibold my-8 text-pink-700'>Delicious Homemade Treats</h1>
            <div className='flex justify-center p-5 bg-rose-300 rounded-xl'>
                <div className='w-1/2 p-5'>
                    <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474645974-cakes-group-193.jpg?resize=1200:*" alt="" className='rounded-md' />
                </div>
                <div className='w-1/2 p-5'>
                    <h1 className='text-5xl text-white font-bold'>For the sweetest occasion ever!</h1>
                    <h2 className='text-2xl mt-5 text-white font-bold'>Order Now!!!</h2>
                </div>
            </div>


            <div className='mx-auto my-5'>
                <h1 className='text-5xl pt-5 font-semibold text-center'>My Products</h1>
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

            <h1 className='text-center text-5xl font-semibold my-8 text-orange-700'>Delicious Deals !!!</h1>
            <div className='flex justify-center p-5 my-5 bg-orange-300 rounded-xl'>

                <div className='w-1/2 p-5'>
                    <img src="https://previews.123rf.com/images/blankstock/blankstock2007/blankstock200702209/152498774-up-to-25-off-sale-banner-with-grunge-speech-bubble-discount-offer-price-sign-special-offer-symbol-sa.jpg" alt="" className='rounded-md' />
                </div>
                <div className='w-1/2 p-5'>
                    <img src="https://www.bhg.com/thmb/EEiHl8krVv7Y7IziWNHBt_7WOC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-bake-how-to-make-cupcakes-hero-01-12c03f3eff374d569b0565bff7d9e597.jpg" alt="" className='rounded-md' />
                </div>
            </div>
        </div>
    );
};

export default Home;