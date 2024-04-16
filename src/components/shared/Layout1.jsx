import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout1() {
  return (
    <>
    <div className="flex flex-col flex-1 bg-blue-500 w-screen" >
          <Header />
    <div className='flex flex-row bg-white h-screen w-screen overflow-hidden'>
        <Sidebar />
        
          <div className="flex-1 p-4 min-h-0 overflow-auto">
          <div>{<Outlet />}</div>
      
          </div>
        </div>
          
    </div>

    </>
  )
}

export default Layout1

