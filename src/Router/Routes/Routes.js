import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetailsAndReview from "../../Pages/Home/Services/ServiceDetailsAndReview";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
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
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])

export default router;