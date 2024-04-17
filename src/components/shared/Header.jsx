import 
 {BsFillBellFill,  BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs';
 import logoImage from '../../assets/medpaylogo.png';
 import dpImage from '../../assets/userdp.jpeg';

function Header() {
  return (
    <>
    <header className='header'>
        <div className='img-logo'>
            <img src={logoImage} alt="medpaylogo" />
        </div>
        <div className='search-icon'>
            <input type="text" placeholder='Search' />
            {/* <BsSearch className='icon'/> */}
        </div>
        <div style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
        <div>
          <BsFillBellFill className='text-teal-500 border rounded-full p-0.5 bg-white w-7 h-7' />
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

        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <img src={dpImage} alt="profile-picture"  className='pp-img'/>
        </div> */}
    </header>
    </>


  )
}

export default Header

