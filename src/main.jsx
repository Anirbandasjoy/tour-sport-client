import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import AuthProvider from './context/AuthProvider'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          position: "top-center",
          style: {
            background: "#283046",
            color: 'white'
          }
        }}
      />
    </AuthProvider>
  </React.StrictMode>,
)
