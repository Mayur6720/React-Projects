import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Mainrouting from './MainRouting.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Mainrouting}>
      <Mainrouting></Mainrouting>
    </RouterProvider>
  </React.StrictMode>,
)
