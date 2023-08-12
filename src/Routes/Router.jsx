import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";

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
                element: <Service></Service>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]

    },
]);

export default router;