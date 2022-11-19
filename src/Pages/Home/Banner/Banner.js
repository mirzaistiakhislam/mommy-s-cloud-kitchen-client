import React from 'react';
import burger from '../../../assets/resize-1668876038534630145burger.jpg';
import pizza from '../../../assets/resize-16688761901365018387pizza.jpg';
import chicken from '../../../assets/resize-1668876090247085395chicken.jpg';
import BannerItem from './BannerItem';
import './Banner.css';

const Banner = () => {

    const BannerData = [
        {
            carouselImage: pizza,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            carouselImage: burger,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            carouselImage: chicken,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                BannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;