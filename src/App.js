import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';

import "./app.scss"
import 'react-toastify/dist/ReactToastify.css';
import { Contact } from "./pages/Contact/Contact";

const Layout = () => {
  return (
    <div className="App">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/contact",
        element: <Contact />
      }

    ]
  }

]);



const App = () => {
  return (
    <> 
      <RouterProvider router={router} />
      <ToastContainer />
</>
  );
}

export default App;
