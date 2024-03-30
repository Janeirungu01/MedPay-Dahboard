import React from 'react'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts';

function Dashboard() {
  return (
    <>
      <h1>This is a Dashboard</h1>
      <div className='flex flex-row gap-4 w-full'></div>
     < RecentOrders />
    </>
  )
}

export default Dashboard
