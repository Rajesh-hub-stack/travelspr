import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Trips from './User/Trips'
import Previous_trip from './User/Previous_trip'
import Help from './User/Help'
import Login from './User/Login'
import Registration from './User/Registration'
import Bookings from './User/Bookings'
//Adminlogin
import Adminlogin from './Agency/Adminlogin'
import Add_trips from './Agency/Add_trips'
import Booking_details from './Agency/Booking_details'
import Customer_details from './Agency/Customer_details'
import Trip_details from './Agency/Trip_details'
import App_navbar from './App_navbar'
// import  Bookings from './User/Bookings'
import User_queries from './Agency/User_queries'
const App_index = () => {
  return (
    <div>
   <BrowserRouter>
   <App_navbar />

   <Routes>

        <Route path={'/trip'} element={<Trips />} />
         <Route path={'/prev_trips'} element={<Previous_trip />} />
          {/* <Route path={'/help'} element={<Help />} /> */}
          <Route path={'/travelspr'} element={<Login />} />
          <Route path={'/Registration'} element={<Registration />} />
              
                <Route path={'/Customer_Support'} element={<Help />} />
                 <Route path={'/booking'} element={<Bookings/>}/>
                {/* Admin */}

                <Route path={'/admin'} element={<Adminlogin />}/>
        <Route path={'/add_trips'} element={<Add_trips />}/>
        <Route path={'/booking_details'} element={<Booking_details />}/>
         <Route path={'/customer_details'} element={<Customer_details />}/>
          <Route path={'/trip_details'} element={<Trip_details />}/>
             <Route path={'/query_details'} element={<User_queries />}/>
                    
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App_index
