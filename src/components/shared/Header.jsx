import React from 'react';
import { HiMenu, HiOutlineBell, HiOutlineSearch, HiOutlineLogout } from "react-icons/hi";
import logoImage from '../../assets/medpaylogo.png';
import dpImage from '../../assets/userdp.jpeg';
import { sidebarTopLinks, sidebarBottomLinks} from "../../lib/constants/navigation";
import { SidebarLink } from "./Navbar";
import classNames from "classnames";
import { linkClass } from "./Navbar";
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const toggleSidebar = () => {
    setOpenNav(!openNav);
  }
  return (
    <>
       {/* ------------ Mobile Navbar -------------- */}
       {openNav && ( <div className="w-full h-screen p-3 flex flex-col text-black">
      <RxCross1 onClick={()=> toggleSidebar()}/>
        <div className="flex-1 py-8 flex flex-col gap-1">
          {sidebarTopLinks.map((item) => (
            <SidebarLink key={item.key} item={item} onClick={toggleSidebar}/>
          ))}
        </div>

        <div className="flex flex-col gap-0.5 pt-2">
          {sidebarBottomLinks.map((item) => (
            <SidebarLink key={item.key} item={item} onClick={toggleSidebar}/>
          ))}
        </div>
        <Link to='/' style={{textDecoration:'none'}} onClick={() => toggleSidebar()}>
        <div className={classNames(linkClass, " cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
        </Link>
      </div>)}
      {/*------------- End of mobile Navbar ------------- */}

    <header className='header'>
    <div className='menu-icon'>
           <HiMenu className='icon' onClick={() => toggleSidebar()}/>
        </div>
        <div className='img-logo'>
            <img src={logoImage} alt="medpaylogo" />
        </div>
        <div className='search-icon'>
            <input type="text" placeholder='Search' />
             <HiOutlineSearch fontSize={25} className="hidden"/> 
        </div>
        <div style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
        <div>
          <HiOutlineBell className='text-teal-500 border rounded-full p-0.5 bg-white w-7 h-7' />
        </div>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "20rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "15px",
          }}
        >
          <img src={dpImage} alt="dpImage" />
        </div>
      </div>
    </header>
    </>


  )
}

export default Header

