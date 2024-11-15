import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts/>,
      children: [
        {
          path: "",
          element: <Navigate to={'/category/01'}></Navigate>
        },
        {
          path: "/category/:id",
          element: <CategoryNews/>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        }
      ]
    },
    {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails/></PrivateRoute>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
          {
            path: '/auth/login',
            element: <Login/>
          },
          {
            path: '/auth/register',
            element: <Register/>
          }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
  ]);

export default router;

