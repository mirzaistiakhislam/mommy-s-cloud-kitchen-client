import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';
import Working from '../Working/Working';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageServices></HomePageServices>
            <Link to="/services">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">See All</button>
            </Link>
            <About></About>
            <Working></Working>
        </div>
    );
};

export default Home;