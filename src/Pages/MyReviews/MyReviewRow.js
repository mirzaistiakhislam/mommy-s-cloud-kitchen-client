import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ myReview, handleDelete }) => {

    const { _id, serviceName, customer, price, phone, service, message } = myReview;
    // console.log(_id);
    const [myReviews, setMyReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [service])

    return (
        <div className='grid place-content-center' >
            {
                <tr>
                    <th>
                        <label>
                            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    {
                                        myReviews?.img &&
                                        <img src={myReviews.img} alt="Avatar Tailwind CSS Component" />
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{serviceName}</div>
                                <div className="text-sm opacity-50">Mommy's Cloud Kitchen</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {message}
                    </td>

                    <th>
                        <Link to={`/updatereview/${_id}`}>
                            <button className="btn">Update Review</button>
                        </Link>
                    </th>
                </tr>
            }

        </div>
    );
};

export default MyReviewRow;