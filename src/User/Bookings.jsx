import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Bookings = () => {
    const trip_details=useSelector(state=>state)
    // console.log(trip_details)
    const user_name=localStorage.getItem('user_Name')
   const user_mobile= localStorage.getItem('user_mobile')
   const nav=useNavigate()
    const [booking,addbooking]=useState({
      user_name:user_name,
      
      user_mobile:user_mobile,
      // Trip_id:trip_details.Trip_id,
      "Available_Seats":trip_details.Available_Seats,
     "Bus_Type":trip_details.Bus_Type,
    // "Contact":trips[x].Contct,
      "From":trip_details.From,
   "From_Date_Timings":trip_details.From_Date_Timings,
    "Ticket_Price":trip_details.Ticket_Price,
      "To":trip_details.To,
"To_Date_Timings":trip_details.To_Date_Timings,
"Travelling_Name":trip_details.Travelling_Name,
      Person_name:'',
      Person_mobile:'',
    })
   

     console.log('booking:',booking)
    const booking_form=(e)=>{
      e.preventDefault()
      console.log('booking:',booking)
      axios.post('https://travelagency-18630-default-rtdb.firebaseio.com/booking.json',booking).then(r1=>{
        alert('booking success')
      })
      nav('/trip')
    }
  return (
    <div>
     <div className="col-6 offset-3">
            <center><h2><b>Booking details</b></h2></center>
        <form onSubmit={booking_form} >
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Travelling Name</label>
    <input name='Travelling_Name' value={trip_details.Travelling_Name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   {/* <div class="mb-3">
    <label for="exampleInputEmail1"   class="form-label">Contact</label>
    <input type="tel" name='Contact'    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div> */}
   
  <div class="mb-3">
    <div class="input-group">
            <input name='Travelling_Name' value={trip_details.From} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <input name='Travelling_Name' value={trip_details.To} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  {/* <select name='From'   class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>From</option>
  <option value="HYD">HYD</option>
  <option value="TPT">TPT</option>
</select> */}
  {/* <span class="input-group-text"></span>
  <select name='To' class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>To</option>
  <option value="HYD">HYD</option>
  <option value="BNG">BNG</option>
  <option value="TPT">TPT</option>

</select> */}
</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Available Seats</label>
    <input type='number' name='Available_Seats'value={trip_details.Available_Seats}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Ticket Price</label>
    <input name='Ticket_Price'value={trip_details.Ticket_Pricee} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <div class="input-group">
       <span class="input-group-text">Date|Timings</span>
                   <b>From</b>
           <input name='From_Date_Timings'value={trip_details.From_Date_Timings}  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <b>To</b>
               <input name='To_Date_Timings' value={trip_details.To_Date_Timings} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
   </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Person Name</label>
    <input type='text' name='Person_name' onChange={(e)=>addbooking({...booking,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Person Mobile</label>
    <input type='tel' name='Person_mobile'onChange={(e)=>addbooking({...booking,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

    {/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Bus Type</label>
    <select name='Bus_Type'  class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>---------Select Your Bus Type----------</option>
  <option value="A/c 2+1 Sleeper">A/c 2+1 Sleeper</option>
  <option value="Non-A/c 2+1 Sleepe">Non-A/c 2+1 Sleeper</option>
  <option value="A/c Sleeper">A/c Sleeper</option>
   <option value="Non-A/c Sleepe">Non-A/c Sleeper</option>
</select>
  </div> */}
         
  <div className='text-center'> 
  
  <button type="submit" class="btn btn-success">book now</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Bookings
