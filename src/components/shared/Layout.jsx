import { Outlet } from "react-router-dom"

function Layout() { 
  return (
    <>
    <div>
        <div>Sidebar</div>
        <div>Header</div>
        <div>{Outlet}</div>
    </div>      
    </>
  )
}

export default Layout
