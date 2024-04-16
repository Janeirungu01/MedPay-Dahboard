import RecentOrders from './RecentOrders';
import Charts from './Charts';

function Dashboard() {
  return (
    <>
      <div className='flex flex-row justify-between w-full'></div>
      <Charts />
      <br />
     < RecentOrders />
    </>
  )
}

export default Dashboard
