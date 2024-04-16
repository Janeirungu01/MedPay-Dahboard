
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <>
      <aside className='menu'>       
        <div className='flex flex-col justify-between'>
        
            <ul className='sidebar-list py-2 m-2'>
                <li className='sidebar-list-item'><BsGrid1X2Fill /><a href="">Dashboard</a></li>
                <li className='sidebar-list-item'><BsFillArchiveFill /><a href="">Transaction</a></li>
                <li className='sidebar-list-item'><BsFillGrid3X3GapFill /><a href="">Analytics</a></li>
                <li className='sidebar-list-item'><BsPeopleFill /><a href="">Profile</a></li>
                <li className='sidebar-list-item'>< BsPeopleFill/><a href="">Staff</a></li>
                
            </ul>
            
            <ul className='sidebar-list py-2 m-2'>
                <li className='sidebar-list-item'>< BsFillGearFill /><a href="">Settings</a></li>
                <li className='sidebar-list-item'><BsMenuButtonWideFill /><a href="">Logout</a></li>
              </ul>
            
        </div>
      </aside>
    </>
  )
}

export default Sidebar