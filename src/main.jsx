import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainRoot from './Main Root/MainRoot';
import Blog from './Components/blog page/Blog';
import Header from './Components/Home Page/Header';
import Details from './Components/Details Page/Details';
import BaidRoom from './Components/Baidrom/BaidRoom';
import Register from './Components/Register';
import Login from './Components/Login';
import Auth from './Privet router/Auth';
// import Details from './Components/Details Page/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    loader: () => fetch("/Api.json"),
    children: [



    ]
  },

  {
    path: "/blog",
    element: <Blog></Blog>
  },

  {
    path: "/details/:id",
    element: <Details></Details>,
    loader: async ({ params }) => {
      const pev = await fetch("/Api.json")
      const data = await pev.json()
      const idChek = data.find(d => d.id == params.id)
      return idChek
    },
  },

  {
    path: "/baidroom",
    element: <BaidRoom></BaidRoom>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/login",
    element: <Login></Login>
  }

]);

createRoot(document.getElementById('root')).render(
  <Auth>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Auth>
)
