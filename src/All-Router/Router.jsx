import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main-Layout/Layout";
import ErrorPage from "../All-Pages/ErrorPage";
import Home from "../All-Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            
        ]

    }
])

export default router