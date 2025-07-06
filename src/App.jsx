import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import ShopCategory from './Components/ShopCategory'
import Detail from './Components/Detail'

const App = () => {
  
  return (
      <div>
          <BrowserRouter>
      <Routes>

        <Route path="/Detail" element={<Detail title="26g Protein Shake Mango Rizz"/> } />
        {/* <Route path="/Detail" element={<Detail  title="a2"/> } /> */}
        <Route path="/ShopCategory" element={<ShopCategory/> } />
        <Route path="/" element={<Home/> } />
        <Route path="/Login" element={<Login/> } />
      </Routes>
    </BrowserRouter>

      </div>
  



  )
}

export default App
