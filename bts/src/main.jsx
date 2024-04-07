import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routs/root';
import SignInPage from './routs/signin';
import SignUpPage from './routs/signup';
import About from './routs/about';
import Services from './routs/services';
import Reviews from './routs/reviews';
import NewOrder from './routs/NewOrder'
// import Services from 'routs/services.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signin",
    element: <SignInPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/newOrder",
    element: <NewOrder/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <div>
      <Root/>
      <About/>
      <Services/>
      <Reviews/>
    </div> */}
  </React.StrictMode>
);