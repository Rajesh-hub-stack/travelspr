import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Trips from './Trips'
import  Navbar  from './Navbar'
import Previous_trip from './Previous_trip'
import Help from './Help'
import Login from './Login'
import Registration from './Registration'


const Index = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
        <Route path={'/trip'} element={<Trips />} />
         <Route path={'/prev_trips'} element={<Previous_trip />} />
          <Route path={'/help'} element={<Help />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Registration'} element={<Registration />} />
                <Route path={'/Customer_Support'} element={<Help />} />
                 {/* <Route path={'/Customer_Support'} element={<Help />} /> */}
        </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default Index
