import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


const Previous_trip = () => {
    const [All_previous_trips,set_previous]=useState([])
  
  const Trips=[{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':800,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':21},{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':1400,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':54},{'Travels':'Sri krishna Travels','Semi_info':'A/c 2+1 Sleeper','Bus_no':'AP04A5523','Price':822,'Start_time':'09:00pm','End_time':' 8:30am','Available_Seats':74}]
   useEffect(()=>{
alert('https://travelagency-18630-default-rtdb.firebaseio.com/booking.json').then(r1=>{
    console.log(r1.data)
    set_previous(r1.data)
   })
   },[])
   let previous_trips=[]

      
//  let Available_trips=[]
   
  console.log('trips:',All_previous_trips)
  for(let  x of Object.keys(All_previous_trips)){
    const user_name=localStorage.getItem('user_Name')
   const user_mobile= localStorage.getItem('user_mobile')
   if(String(user_mobile)===String(All_previous_trips[x].user_mobile)){
 previous_trips.push ({
       "Available_Seats":All_previous_trips[x].Available_Seats,
     "Bus_Type":All_previous_trips[x].Bus_Type,
    // "Contact":trips[x].Contct,
      "From":All_previous_trips[x].From,
   "From_Date_Timings":All_previous_trips[x].From_Date_Timings,
    "Ticket_Price":All_previous_trips[x].Ticket_Price,
      "To":All_previous_trips[x].To,
" To_Date_Timings":All_previous_trips[x].To_Date_Timings,
" Travelling_Name":All_previous_trips[x].Travelling_Name,
'Person_mobile':All_previous_trips[x].Person_mobile,
"Person_name":All_previous_trips[x].Person_name
    })
   }
//     previous_trips.push ({
//        "Available_Seats":All_previous_trips[x].Available_Seats,
//      "Bus_Type":All_previous_trips[x].Bus_Type,
//     // "Contact":trips[x].Contct,
//       "From":All_previous_trips[x].From,
//    "From_Date_Timings":All_previous_trips[x].From_Date_Timings,
//     "Ticket_Price":All_previous_trips[x].Ticket_Price,
//       "To":All_previous_trips[x].To,
// " To_Date_Timings":All_previous_trips[x].To_Date_Timings,
// " Travelling_Name":All_previous_trips[x].Travelling_Name,
// 'Person_mobile':All_previous_trips[x].Person_mobile,
// "Person_name":All_previous_trips[x].Person_name
//     })
}
console.log('previous trips:',previous_trips)
  
  return(
        <>
        <div className='container mt-5'>
      <center><u><b><h5>Previous Trip Details</h5></b></u></center>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Travels Name</th>
       <th scope="col">User Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
    <th scope="col">Date|Time</th>
      <th scope="col">Ticket Price</th>
    </tr>
  </thead>
  <tbody>
    {previous_trips.map((x,index)=><tr>
      <th scope="row">{index+1}</th>
      <td>{x.Travelling_Name}</td>
      <td>{x.Person_name}</td>
      <td>{x.Person_mobile}</td>
      <td>{x.From}</td>
      <td>{x.To}</td>
       <td>{x.From_Date_Timings}</td>
       <td>{x.To_Date_Timings}</td>
      <td><td>{x.Ticket_Price}</td></td>
    </tr>
    )}
    {/* <tr>
      <th scope="row">1</th>
      <td>KVR</td>
      <td>Muni</td>
      <td>83745454984</td>
      <td>BNG</td>
      <td>PDTR</td>
       <td>11/10/2005 9:30pm</td>
      <td>rs 500</td>
    </tr> */}
    
  </tbody>
</table>
    </div>
    </>
    )

}

export default Previous_trip
