import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Layout1 from "./components/shared/Layout1";
import Analytics from "./components/Analytics";
import Transactions from "./components/Transactions"
import Charts from "./helpers/Charts";
import Help from "./components/Help";
import Settings from "./components/Settings";
import Profile from "./components/Profile";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path= '/' element={<Layout1 />} > 
        <Route index element={<Dashboard />} /> 
        <Route path= '/analytics' element={<Analytics />} />
        <Route path= '/transactions' element={<Transactions />} />
        <Route path= '/charts' element={<Charts />} />
        <Route path= '/support' element={<Help />} />
        <Route path= '/settings' element={<Settings />} />
        <Route path= '/support' element={<Help />} />
        <Route path= '/profile' element={<Profile />} />
        
      
        
        </Route>
        <Route path= '/login' element={<div>This is a login</div>} /> 

       </Routes>
    </Router>    
    </>



  )
}

export default App
