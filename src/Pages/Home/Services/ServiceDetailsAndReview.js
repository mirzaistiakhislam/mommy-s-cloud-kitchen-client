import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const ServiceDetailsAndReview = () => {

    useTitle('Service Details and Reviews');

    const { _id, img, title, price, description } = useLoaderData();

    const { user } = useContext(AuthContext);
    // console.log(user);

    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicedetailsandreview`)
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)

            }
            )
    }, [])


    return (
        <div>
            <div className="card w-2/2 bg-base-100 shadow-xl mx-auto mb-20">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='font-bold mt-6'>Price: ${price}</p>
                    <Link to={`/addreviews/${_id}`} className="card-actions justify-end">
                        <button className="btn btn-primary">Add Review</button>
                    </Link>
                </div>
            </div>

            <h3 className="font-semibold mb-6 px-20 text-4xl text-center">All Reviews </h3>
            <div className="overflow-x-auto w-full">
                {
                    allReviews.length > 0 ?
                        <table className="table w-full">
                            <tbody>
                                {
                                    allReviews &&
                                    allReviews.map(review => {

                                        return <tr className=''>
                                            <td className=''>
                                                {
                                                    review.photoURL !== null ?
                                                        <>
                                                            <div className="avatar">
                                                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                                    <img src={review.photoURL} alt="user img" />
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div className="avatar">
                                                                <div className="w-14  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                                    <img src={`https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0=`} alt="avatar" />
                                                                </div>
                                                            </div>
                                                        </>
                                                }

                                            </td>

                                            <td className='ms-0'>Reviewer Name: {review.customer}</td>
                                            <td>Review: {review.message}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <p className="text-">No reviews here</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetailsAndReview;