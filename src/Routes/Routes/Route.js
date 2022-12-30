
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import SignUp from "../../Pages/SignUp/SignUp";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            

        ]
    }
])

export default router;