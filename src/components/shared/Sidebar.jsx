
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <>
    <div
      style={{
        width: "15%",
        minHeight: "100vh",
        padding: "2rem",
        boxShadow: "0rem 0rem 1rem 0rem ",
      }}
    >
      <div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
            <BsListCheck />
            {/* <img src={dashboard} alt="" /> */}
          </div>
          <p>Dashboard</p>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsMenuButtonWideFill />
            {/* <img src={transaction} alt="" /> */}
          </div>

          <p>Transaction</p>
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
            alignItems: "center",
            width: "20%",
          }}
        >
          <div>
          <BsListCheck />
            {/* <img src={analytic} alt="" /> */}
          </div>

          <p>Analytics</p>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsPeopleFill />
            {/* <img src={profile} alt="" /> */}
          </div>

          <p>Profile</p>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsPeopleFill />
            {/* <img src={staff} alt="" /> */}
          </div>

          <p>Staff</p>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsListCheck />
            {/* <img src={help} alt="" /> */}
          </div>

          <p>Help/Support</p>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsListCheck />
            {/* <img src={settings} alt="" /> */}
          </div>
          <p>Settings</p>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div>
          <BsListCheck />
            {/* <img src={logout} alt="" /> */}
          </div>
          <p>Log Out</p>
        </div>
      </div>
    </div>
    </>
    // <>
    //   <aside className='menu'>       
    //     <div className='flex flex-col justify-between'>
        
    //         <ul className='sidebar-list py-2 m-2'>
    //             <li className='sidebar-list-item'><BsGrid1X2Fill /><a href="">Dashboard</a></li>
    //             <li className='sidebar-list-item'><BsFillArchiveFill /><a href="">Transaction</a></li>
    //             <li className='sidebar-list-item'><BsFillGrid3X3GapFill /><a href="">Analytics</a></li>
    //             <li className='sidebar-list-item'><BsPeopleFill /><a href="">Profile</a></li>
    //             <li className='sidebar-list-item'>< BsPeopleFill/><a href="">Staff</a></li>
                
    //         </ul>
            
    //         <ul className='sidebar-list py-2 m-2'>
    //             <li className='sidebar-list-item'>< BsFillGearFill /><a href="">Settings</a></li>
    //             <li className='sidebar-list-item'><BsMenuButtonWideFill /><a href="">Logout</a></li>
    //           </ul>
            
    //     </div>
    //   </aside>
    // </>
  )
}

export default Sidebar