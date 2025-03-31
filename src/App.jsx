import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/paste'
import ViewPage from './components/ViewPage'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element:
      <div>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div>
        <Navbar />
        <ViewPage />
      </div>
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
