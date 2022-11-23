import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {

    const storedUser = useLoaderData();
    console.log(storedUser);

    const [updateReview, setUpdateReview] = useState(storedUser);

    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const newReview = storedUser;
        newReview['message'] = message;
        console.log(newReview);

        fetch(`http://localhost:5000/myreviews/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Updated Successfully', {
                        position: "top-center"
                    });
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <form onSubmit={handleUpdateReview} className="card-body">

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' defaultValue={storedUser.email} className="input input-bordered" readOnly />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' defaultValue={storedUser.customer} className="input input-bordered" readOnly />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <textarea name="message" className="textarea textarea-bordered" type="message" defaultValue={storedUser.message}></textarea>
            </div>

            <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
            <ToastContainer />
        </form>
    );
};

export default UpdateReview;