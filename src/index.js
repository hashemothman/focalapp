import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {routers} from './routes/Route.jsx';



const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}  basename="/"/>
  </React.StrictMode>
);


