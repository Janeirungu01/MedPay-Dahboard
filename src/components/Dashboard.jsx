import RecentOrders from './RecentOrders';
import Charts from './Charts';

function Dashboard() {
  return (
    <>
      <div className='flex flex-row gap-4 w-full'></div>
      <Charts />
      <br />
     < RecentOrders />
    </>
  )
}

export default Dashboard
