import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Layout1 from "./components/shared/Layout1";
import Analytics from "./components/Analytics";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";
import Help from "./components/Help";
import Products from "./components/Products";


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
        <Route path= '/products' element={<Products />} />
        
      
        
        </Route>
        <Route path= '/login' element={<div>This is a login</div>} /> 

       </Routes>
    </Router>    
    </>



  )
}

export default App
