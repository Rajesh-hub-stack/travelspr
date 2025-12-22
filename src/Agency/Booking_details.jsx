import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Booking_details = () => {
const[booking,addbooking]=useState([])
  useEffect(()=>{
    axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/booking.json').then(r1=>{
        console.log(r1.data)
        addbooking(r1.data)
      })
  },[])
  let All_booking=[]
  for(let x of Object.keys(booking)){
    All_booking.push({
       
            user_name:booking[x].user_name,
            user_mobile:booking[x].user_mobile,
            // Trip_id:trip_details.Trip_id,
            "Available_Seats":booking[x].Available_Seats,
           "Bus_Type":booking[x].Bus_Type,
          // "Contact":trips[x].Contct,
            "From":booking[x].From,
         "From_Date_Timings":booking[x].From_Date_Timings,
          "Ticket_Price":booking[x].Ticket_Price,
            "To":booking[x].To,
      "To_Date_Timings":booking[x].To_Date_Timings,
      "Travelling_Name":booking[x].Travelling_Name,
            Person_name:booking[x].Person_name,
            Person_mobile:booking[x].Person_mobile,
        

    })
  }
  return (
    <div className='container mt-2'>
      <center><u><b><h5>Booking Details</h5></b></u></center>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Travels Name</th>
       <th scope="col">User Name</th>
      <th scope="col"> user Mobile</th>
      <th scope="col">Traveller Name</th>
      <th scope="col"> Traveller Mobile</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
    <th scope="col">Date|Time</th>
      <th scope="col">Ticket Price</th>
    </tr>
  </thead>
  <tbody>
    {
      All_booking.map((x,index)=>{
        <tr>
      <th scope="row">{index+1}</th>
      <td>{x.Travelling_Name}</td>
      <td>{x.user_name}</td>
      <td>{x.user_mobile}</td> 
      <td>{x.Person_name}</td>
       <td>{x.Person_mobile}</td> 
      <td>{x.From}</td>
      <td>{x.To}</td>
       <td>{x.From_Date_Timings}</td>
      <td>{x.Ticket_Price}</td>
    </tr>

      })
    }
    
    
  </tbody>
</table>
    </div>
  )
}

export default Booking_details
