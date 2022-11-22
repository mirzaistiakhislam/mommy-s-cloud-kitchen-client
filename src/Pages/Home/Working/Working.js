import React from 'react';
import ckw from '../../../assets/ckw.png';

const Working = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={ckw} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">How does a cloud kitchen work?</h1>
                    <p className="py-6">Cloud kitchens are centralized licensed commercial food production facilities where anywhere from one or two to dozens of restaurants rent space to prepare delivery-optimized menu items. One restaurant may run multiple brands, or virtual restaurants, all operating under one roof, or the kitchen may be run like an incubator, shared by different purveyors. Picture a large warehouse with numerous stations (mini-restaurants) of stainless steel prep tables, hood vents, stoves, ovens, and sinks, each with its own orders coming in direct from customers. </p>
                </div>
            </div>
        </div>
    );
};

export default Working;