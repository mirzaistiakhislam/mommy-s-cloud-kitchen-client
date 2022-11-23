import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {

    useTitle('My Reviews');

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const [myReviews, setMyReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('mck-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {


        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully', {
                        position: "top-center"
                    });
                    const remaining = myReviews.filter(rvw => rvw._id !== id);
                    setMyReviews(remaining);
                }
            })

    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <tbody>
                    {
                        myReviews.map(myReview => <MyReviewRow
                            key={myReview._id}
                            myReview={myReview}
                            handleDelete={handleDelete}
                        ></MyReviewRow>)
                    }
                </tbody>


            </table>
            <ToastContainer />
        </div>
    );
};

export default MyReviews;