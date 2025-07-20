import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Detail from './Components/Detail'
import WheyProtein from './Shop/WheyProtein'
import AllProducts from './Shop/AllProducts'
import Bars from './Shop/Bars'
import New from './Shop/New'
import Muesli from './Shop/Muesli'
import Breakfast from './Shop/Breakfast'
import Oats from './Shop/Oats'
import Protein from './Shop/Protein'
import Seeds from './Shop/Seeds'
import YogaBaby from './Shop/YogaBaby'
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/YogaBaby" element={<YogaBaby />} />
          <Route path="/Seeds" element={<Seeds />} />
          <Route path="/Protein" element={<Protein />} />
          <Route path="/Oats" element={<Oats />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Muesli" element={<Muesli />} />
          <Route path="/New" element={<New />} />
          <Route path="/Bars" element={<Bars />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/WheyProtein" element={<WheyProtein />} />
          <Route path="/Detail" element={<Detail title="26g Protein Shake Mango Rizz" />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>




  )
}

export default App
