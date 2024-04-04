import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Layout1 from "./components/shared/Layout1";
import Products from "./components/PopularProducts"
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path= '/' element={<Layout1 />} > 
        <Route index element={<Dashboard />} /> 
        <Route path= '/products' element={<Products />} />
        <Route path= '/transactions' element={<Transactions />} />
        </Route>
        <Route path= '/login' element={<div>This is a login</div>} /> 

       </Routes>
    </Router>    
    </>



  )
}

export default App
