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
                element: <AddReviews></AddReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/myreviews/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])

export default router;