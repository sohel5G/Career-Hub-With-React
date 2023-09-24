import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import Frontpage from './components/Frontpage/Frontpage';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/Statistics/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Frontpage></Frontpage>
      },
      {
        path: '/appliedjobs',
        loader: () => fetch('../public/data/jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        loader: () => fetch('../public/data/jobs.json'),
        element: <JobDetails></JobDetails>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
