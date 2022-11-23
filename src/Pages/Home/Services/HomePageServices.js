import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceslimit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-12'>
            <div className='text-center my-12'>
                <h2 className='text-5xl font-semibold '>Our Services</h2>
            </div>
            <div className='grid gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;