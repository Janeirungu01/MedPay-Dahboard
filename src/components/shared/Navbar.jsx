import { sidebarTopLinks, sidebarBottomLinks } from '../../lib/constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:no-underline rounded-sm text-base'


function Navbar() {
  return (
    <>
    <div className='bg-white w-60 p-3 flex flex-col h-max text-black'>
    
        <div className='flex-1 py-8 flex flex-col gap-1'>
            {sidebarTopLinks.map ((item) => (
               <SidebarLink key={item.key} item={item} />

            ))}
        </div>

        <div className='flex flex-col gap-0.5 pt-2'>
            {sidebarBottomLinks.map((item) => (
                <SidebarLink key={item.key} item= {item} />
            ))}
        </div>
        
        <div className={classNames(linkClass, 'text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
        </div>
    </div>

    <div className='bg-neutral-600'></div>
      
    </>
  )
}

  function SidebarLink ({item}) {
    const { pathname } = useLocation()
    return (
        <>
                
    <Link to={item.path} className={classNames (pathname=== item.path ? 'text-red' : 'text-black',linkClass)}> 
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
        </>
    )
  }


export default Navbar
