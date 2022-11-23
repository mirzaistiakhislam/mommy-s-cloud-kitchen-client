import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReviews = () => {

    useTitle('Add Review');
    const loader = useLoaderData();

    const { _id, title } = loader;

    console.log(_id, title);
    const { user, logOut } = useContext(AuthContext);
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
            photoURL: photoUrl

        }

        fetch('http://localhost:5000/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully', {
                        position: "top-center"
                    });
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <form onSubmit={handlePlaceReview} className="grid place-content-center">
            <h2 className="text-4xl text-center my-6">Enter Your Review About: <span className='text-4xl font-bold'>{title}</span></h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="name" type="text" placeholder="Enter your name"
                    defaultValue={user?.customer} className="input input-ghost w-full input-bordered" required /> <br />

                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly /> <br />

                <input name="photoUrl" type="text" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly /> <br />

                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
            </div>

            <input className='btn mt-4 mb-12' type="submit" value="Submit Review" />
            <ToastContainer />
        </form>
    );
};

export default AddReviews;