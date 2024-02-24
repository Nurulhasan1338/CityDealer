import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from "./components/Home.jsx"
import PropertyForSell from "./components/catalog/index.jsx"
// import Interior from "./components/Interior/index.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/sell",
        element: <PropertyForSell/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
