import React, { createContext, useContext } from 'react';
import './styles/index.css';
import MyContext from './Context';

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


const App = ()=>{
  const [ContextData, setContext] = React.useState({
    address: null,
    subject: null,
    date: null
  });

  return(
  <MyContext.Provider value={{ContextData, setContext}}>
    <RouterProvider router={router} />
  </MyContext.Provider>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
