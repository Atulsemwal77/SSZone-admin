import React from 'react'
import Dashboard from './components/sidebar'
import Navbar from './components/Navbar'
import Abc from './components/Abc'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />
      <div className='flex'>
        <Dashboard />
        <div  className='px-2 w-full'>
          <Abc/>
          <Outlet className=" " />
        </div>
      </div>
    </>
  )
}

export default App