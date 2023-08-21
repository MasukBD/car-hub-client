import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import CartDetails from "../Pages/CartDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/service",
                element: <Service></Service>,
                loader: () => fetch('https://car-hub-server-nine.vercel.app/services')
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-hub-server-nine.vercel.app/services/${params.id}`)
            },
            {
                path: '/cartDetails',
                element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>
            }
        ]

    },
]);

export default router;