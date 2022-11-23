import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, description } = service;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-80">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Album" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'}</>
                            :
                            <>{description}</>
                    }
                </p>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetailsandreview/${_id}`}>
                        <button className="btn btn-primary">See Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;