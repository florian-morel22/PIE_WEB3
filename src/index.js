import React, { Component } from 'react';
import './styles/index.css';

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Sign_ from "./components/Sign_";
import Publication from './components/Publication';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signin",
    element: <Sign_/>
  },
  {
    path: "/publication",
    element: <Publication/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
