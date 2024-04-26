import { HiMenu, HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import logoImage from '../../assets/medpaylogo.png';
import dpImage from '../../assets/userdp.jpeg';

function Header({OpenSidebar}) {
  return (
    <>
    <header className='header'>
    <div className='menu-icon'>
            <HiMenu className='icon' onClick={OpenSidebar}/>
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

