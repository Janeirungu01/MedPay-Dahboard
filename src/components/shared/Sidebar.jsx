import { FcBullish } from 'react-icons/fc'
import { AiOutlineDashboard } from 'react-icons/ai';

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

