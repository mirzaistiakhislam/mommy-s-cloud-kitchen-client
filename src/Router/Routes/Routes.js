import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
// import Services from "../../Pages/Home/Services";
import ServiceDetailsAndReview from "../../Pages/Home/Services/ServiceDetailsAndReview";
import Login from "../../Pages/Login/Login";
import AddReviews from "../../Pages/MyReviews/AddReviews";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReview from "../../Pages/MyReviews/UpdateReview";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/Home/Services/AddService";
import Blogs from "../../Pages/Blogs/Blogs";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/servicedetailsandreview/:id',
                element: <ServiceDetailsAndReview></ServiceDetailsAndReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addreviews/:id',
                element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/updatereview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/myreviews/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;