import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import PrivateRouter from './components/PrivateRouter/PrivateRouter.jsx'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter([
  { path: 'cadastro', element: <App /> },
  { path: '/', element: <Login /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
