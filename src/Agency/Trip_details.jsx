import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'


const Trip_details = () => {
  const[trips,Addtrips]=useState([])

  useEffect(()=>{
    axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/trips.json').then(r1=>{
    console.log(r1.data)
  })

  },[])

 
    
 let Available_trips=[]
  console.log('trips:',trips)
  for(let  x of Object.keys(trips)){
    Available_trips.push ({
       "Available_Seats":trips[x].Available_Seats,
     "Bus_Type":trips[x].Bus_Type,
    "Contact":trips[x].Contct,
      "From":trips[x].From,
   "From_Date_Timings":trips[x].From_Date_Timings,
    "Ticket_Price":trips[x].Ticket_Price,
      "To":trips[x].To,
" To_Date_Timings":trips[x].To_Date_Timings,
" Travelling_Name":trips[x].Travelling_Name,

    })
}
console.log('available trips:',Available_trips)
  return (
   <div className='container mt-2'>
      <center><u><b><h5>Trip Details</h5></b></u></center>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      
       <th scope="col">Travels  Name</th>
     
       <th scope="col">From</th>
      <th scope="col">To</th>
       <th scope="col">Mobile</th>
        
    
    
          <th scope="col">Available Seats</th>
          <th scope="col"> From Date|Time</th>
          <th scope="col"> To Date|Time</th>
     
    </tr>
  </thead>
  <tbody>
    {
      Available_trips.map((x,index)=><tr>
      <th scope="row">{index+1}</th>
      
      <td>{x.Travelling_Name}</td>
      <td>{x.From}</td>
      <td>{x.To}</td>
      <td>{x.Contact}</td>
      
       <td>{x.Available_Seats}</td>
          <td>{x.From_Date_Timings}</td>
           <td>{x.To_Date_Timings}</td>
      
    </tr>)
    }
    
  </tbody>
</table>
    </div>
  )
}

export default Trip_details
