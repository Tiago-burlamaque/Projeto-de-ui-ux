import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './Pages/Login/Login.jsx'
import Registro from './Pages/Registro/Registro.jsx'
import Main from './Layout/Main/Main.jsx'



const router = createBrowserRouter([
  {
    element: (
      <Main />
    ),
    children: [

      { path: '/', element: <Login /> },
      { path: '/registro', element: <Registro /> },
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
