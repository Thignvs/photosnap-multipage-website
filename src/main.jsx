import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import Stories from './assets/pages/Stories.jsx'
import Features from './assets/pages/Features.jsx'
import Pricing from './assets/pages/Pricing.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/stories",
        element: <Stories />
      }, {
        path: "/features",
        element: <Features />
      }, {
        path: "/pricing",
        element: <Pricing />
      },]
  },
]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/photosnap-multipage-website/' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
