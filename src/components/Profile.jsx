import { profileLinks } from '../lib/constants/profileIcons';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:no-underline rounded-sm text-base'


function Profile() {
  return (
    <>
    <div className='bg-white w-60 p-3 flex flex-col h-5/6 text-black'>
    
        <div className='flex-1 py-8 flex flex-col gap-1'>
            {profileLinks.map ((item) => (
               <ProfileLink key={item.key} item={item} />

            ))}
        </div>
        
    </div>

    <div className='bg-neutral-600'></div>
      
    </>
  )
}

  function ProfileLink ({item}) {
    const { pathname } = useLocation()
    return (
        <>
                
    <Link to={item.path} className={classNames (pathname=== item.path ? 'text-blue' : 'text-black',linkClass)}> 
    <span className='text-xl text-teal-300  bg-teal-50 rounded-full p-1'>{item.icon}</span>
    {item.label}
    </Link>
        </>
    )
  }


export default Profile
