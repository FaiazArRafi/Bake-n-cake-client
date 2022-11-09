import React, { useEffect, useState } from 'react';
import AllServices from './AllServices';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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