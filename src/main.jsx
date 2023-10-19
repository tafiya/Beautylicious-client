import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddProducts from './Pages/AddProducts';
import MyCarts from './Pages/MyCarts';
import Root from './Root';
import BandCard from './componants/BandCard';
import ViewProducts from './Pages/ViewProducts';
import UpdateProducts from './Pages/UpdateProducts';
import DetailsProducts from './Pages/DetailsProducts';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './componants/Privateroute';
// import ErrorPage from './Pages/ErrorPage';
import Blog from './Pages/ExtraPage/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
       

      },
      {
        path:"/addProduct",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/carts",
        element:<MyCarts></MyCarts>
      },
      {
        path:'/bands',
        element:<BandCard></BandCard>,
       
      },
      {
        path:'/products/:band_name',
        element:<ViewProducts ></ViewProducts>,
        loader:()=>fetch('http://localhost:3500/products')
      },
      {
        path:'/detailProducts/:id',
        element:<PrivateRoute><DetailsProducts></DetailsProducts></PrivateRoute>,
        loader:()=>fetch('http://localhost:3500/products')

      },
      {
        path:"/updateProducts/:id",
        element:<UpdateProducts></UpdateProducts>,
        loader:({params})=>fetch(`http://localhost:3500/products/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      ,
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:"/blog",
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      }
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>

  

  </React.StrictMode>,
)
