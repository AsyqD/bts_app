import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routs/root';
import About from './routs/about';
import Services from './routs/services';
import Reviews from './routs/reviews';
// import Services from 'routs/services.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "reviews",
        element: <Reviews/>
      },
    ]
  },
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