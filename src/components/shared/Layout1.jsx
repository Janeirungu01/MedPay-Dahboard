import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout1() {
  return (
    <>
    <div>
        <div className='bg-sky-100'>Sidebar</div>
        <div className='bg-teal-200'>Header</div>
        <div>{<Outlet />}</div>
        <p>Footer</p>
    </div>      
    </>
  )
}

export default Layout1

