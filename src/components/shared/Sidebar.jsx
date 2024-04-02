
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <>
      <aside className='menu'>
        <h2 className="className='items-center pt-30 text-red-500">
           MedPay Tracka
        </h2>
        <div className="text-center justify-center">
            <ul className='flex-row flex-1'>
                <li className='py-8 flex flex-1 flex-col gap-0.5 text-black'><BsGrid1X2Fill /><a href="">Dashboard</a></li>
                <li className='sidebar-list-item'><BsFillArchiveFill /><a href="">Transaction</a></li>
                <li className='sidebar-list-item'><BsFillGrid3X3GapFill /><a href="">Analytics</a></li>
                <li className='sidebar-list-item'><BsPeopleFill /><a href="">Profile</a></li>
                <li className='sidebar-list-item'>< BsListCheck/><a href="">Staff</a></li>
                <li className='sidebar-list-item'>< BsMenuButtonWideFill /><a href="">Settings</a></li>
                <li className='sidebar-list-item'><BsFillGearFill /><a href="">Logout</a></li>
            </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

/*
import { FcBullish } from 'react-icons/fc'
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill }
 from 'react-icons/bs'

function Sidebar() {
  return (
    <>
    <aside >
         <div className='sidebar-title'>            
            
        </div>

        <ul className="sidebar-list">
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icons'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icons'/> Transaction
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icons'/> Analytics
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icons'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icons'/> Staff
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icons'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
    </>
  )
}

export default Sidebar



function Sidebar() {
  return (
    <>
      <div className="w-60 p-3 flex flex-col">
        <div className="flex-1 items-center gap-2 px-1 py-3">
            <FcBullish fontSize={24} />
            <span className='text-lg'>MedPay</span>       
          <br />
          <br />
          <>
            <ul className="navbar-nav d-flex flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Transaction</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Staff</a></li>
                    <br />
                    <br />
                    <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
            </ul>
            </>
        </div>

      </div>
    </>
  )
}

export default Sidebar
*/

