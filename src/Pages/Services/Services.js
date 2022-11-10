import React, { useEffect, useState } from 'react';
import AllServices from './AllServices';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://bake-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mx-auto'>
            {
                services.map(service => <AllServices
                    key={service._id}
                    service={service}
                ></AllServices>)
            }
        </div>
    );
};

export default Services;