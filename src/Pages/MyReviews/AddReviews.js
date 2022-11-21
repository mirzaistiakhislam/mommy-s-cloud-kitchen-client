import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReviews = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(user);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message
        }

        fetch('http://localhost:5000/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <form onSubmit={handlePlaceReview}>
            <h2 className="text-4xl">Enter Your Review About: {title}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="name" type="text" placeholder="Enter your name" className="input input-ghost w-full  input-bordered" required />

                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

            <input className='btn' type="submit" value="Submit Review" />
        </form>
    );
};

export default AddReviews;