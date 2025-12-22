import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Adminlogin from './Adminlogin'
import Add_trips from './Add_trips'
import Booking_details from './Booking_details'
import Customer_details from './Customer_details'
import Trip_details from './Trip_details'
import Navbar from './Navbar'

const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/admin'} element={<Adminlogin/>}/>
        <Route path={'/add_trips'} element={<Add_trips/>}/>
        <Route path={'/booking_details'} element={<Booking_details/>}/>
         <Route path={'/customer_details'} element={<Customer_details/>}/>
          <Route path={'/trip_details'} element={<Trip_details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index
