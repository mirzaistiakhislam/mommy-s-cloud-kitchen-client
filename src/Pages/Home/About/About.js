import React from 'react';
import aboutUs from '../../../assets/Aboutus.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                <img src={aboutUs} alt="" className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">About Us!</h1>
                    <p className="py-6">Introducing cloud kitchens, commercial facilities purpose-built to produce food specifically for delivery. These commissary kitchens are sometimes also known as ghost kitchens, shared kitchens, or virtual kitchens with the delivery-only food brands operating within them called virtual restaurants. </p>
                </div>
            </div>
        </div>
    );
};

export default About;