import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/Reviews/MyReviews/MyReviews";
import AddService from "../Pages/Services/AddService";
import Details from "../Pages/Services/Details";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            }

        ]
    },
])