import RecentOrders from '../helpers/RecentOrders';
import Charts from '../helpers/Charts';

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
