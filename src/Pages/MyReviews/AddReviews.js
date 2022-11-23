import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReviews = () => {

    useTitle('Add Review');
    const loader = useLoaderData();

    const { _id, title } = loader;

    console.log(_id, title);
    const { user } = useContext(AuthContext);
    // console.log(user.photoURL);


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const photoUrl = form.photoUrl.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message,
            // image: photoURL
            photoURL: photoUrl

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
                // console.log(data)
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
                <input name="name" type="text" placeholder="Enter your name"
                    defaultValue={user?.customer} className="input input-ghost w-full  input-bordered" required />

                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />

                <input name="photoUrl" type="text" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

            <input className='btn' type="submit" value="Submit Review" />
        </form>
    );
};

export default AddReviews;