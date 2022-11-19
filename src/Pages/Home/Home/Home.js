import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Working from '../Working/Working';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Working></Working>
            <Services></Services>
        </div>
    );
};

export default Home;