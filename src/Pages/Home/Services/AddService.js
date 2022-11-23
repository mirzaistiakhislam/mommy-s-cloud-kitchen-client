import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    const addService = event => {

        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const price = form.price.value;
        const img = form.imageUrl.value;
        const description = form.description.value;

        const addService = {
            title,
            price,
            img,
            description
        }

        fetch(`http://localhost:5000/addservice`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Add successfully', {
                        position: "top-center"
                    });
                    form.reset();
                }
            })
            .catch(error => console.error(error))


    }
    return (
        <form onSubmit={addService}>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your service name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Enter your service price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='imageUrl' placeholder="Enter your image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Write about your service" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </form>
    );
};

export default AddService;