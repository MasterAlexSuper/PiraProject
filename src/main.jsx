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


let tableData = [
  { id: 1, name: 'John', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" },
  { id: 2, name: 'Jane', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" },
  { id: 3, name: 'Doe', tel: "+380 67 233 32-12", adress: "Пр. Науки", email: "someone@gmail.com" }
];

localStorage.setItem('table', JSON.stringify(tableData));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
