
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import UserPostDataDetails from "../../Pages/Home/UserPostData/UserPostDataDetails";

import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: (() => fetch('http://localhost:5000/postData'))
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: (() => fetch('http://localhost:5000/postData'))
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <About></About>
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
                path: '/postDataDetails/:id',
                element: <PrivateRoute><UserPostDataDetails></UserPostDataDetails></PrivateRoute>,
                loader: (({ params }) => fetch(`http://localhost:5000/postData/${params.id}`))
            }

        ]
    }
])

export default router;