import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {

    const { carouselImage, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full mb-12">
            <div className='carousel-img w-full'>
                <img src={carouselImage} alt="" className="w-full rounded-lg height " />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-64">
                <h1 className='text-4xl font-bold text-white'>
                    Best Homemade
                    <br />
                    Kitchen
                    in Town
                </h1>

            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;