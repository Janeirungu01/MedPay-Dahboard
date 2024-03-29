import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Layout1 from "./components/shared/Layout1";
import Products from "./components/Products"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path= '/' element={<Layout1 />} > 
        <Route index element={<Dashboard />} /> 
        <Route path= '/product' element={<Products />} /> 
        </Route>
      </Routes>
    </Router>    
    </>



  )
}

export default App
