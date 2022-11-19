import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, price, title, description } = service;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-80">
            <figure><img src={img} alt="Album" /></figure>
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
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;