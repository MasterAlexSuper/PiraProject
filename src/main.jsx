import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Group from './components/Group.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/App',
    element: <App />,
    children: [
      {
        path: 'group',
        element: <Group />,
      },
      {
        path: 'teacher',
        element: <group />,
      },
      {
        path: 'tarif',
        element: <group />,
      },
      {
        path: 'report',
        element: <group />,
      },
      {
        path: 'accounting',
        element: <group />,
      },
    ],
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
