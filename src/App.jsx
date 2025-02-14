import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './routes/routes.jsx'
import { BrowserRouter, Outlet } from 'react-router'

function App() {
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
