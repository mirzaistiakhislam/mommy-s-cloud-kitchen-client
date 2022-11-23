import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';
import Working from '../Working/Working';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <HomePageServices></HomePageServices>
            <Link className='grid place-content-center mb-20' to="/services">
                <button className="btn btn-outline">See All</button>
            </Link>
            <About></About>
            <Working></Working>
        </div>
    );
};

export default Home;