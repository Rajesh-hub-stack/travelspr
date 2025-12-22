import axios from 'axios'
import React, { useState } from 'react'

const Add_trips = () => {
    const [trip,Addtrip] =useState({
Travelling_Name:'',
 Contact:'',
 From:'',
 To:'',
 Available_Seats:'',
 Ticket_Price:'',
 From_Date_Timings:'',
 To_Date_Timings:'',
Bus_Type:'',
 })
  const Tripsubmit=(e)=>{
    e.preventDefault()
    axios.post('https://travelagency-18630-default-rtdb.firebaseio.com/trips.json',trip).then(r1=>{
      alert('Trip added')
    })
  }
  return (
    <div>
      <div className="col-6 offset-3">
            <center><h2><b>Add Trips</b></h2></center>
        <form  onSubmit={Tripsubmit}>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Travelling Name</label>
    <input name='Travelling_Name' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1"   class="form-label">Contact</label>
    <input type="tel" name='Contact'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   
  <div class="mb-3">
    <div class="input-group">
  
  <select name='From'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>From</option>
  <option value="HYD">HYD</option>
  <option value="BNG">BNG</option>
  <option value="TPT">TPT</option>
</select>
  <span class="input-group-text"></span>
  <select name='To' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>To</option>
  <option value="HYD">HYD</option>
  <option value="BNG">BNG</option>
  <option value="TPT">TPT</option>

</select>
</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Available Seats</label>
    <input type='number' name='Available_Seats'  onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Ticket Price</label>
    <input name='Ticket_Price' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <div class="input-group">
       <span class="input-group-text">Date|Timings</span>
      <b>From</b>
           <input name='From_Date_Timings' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           <b>To</b>
               <input name='To_Date_Timings' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
   </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Bus Type</label>
    <select name='Bus_Type' onChange={(e)=>Addtrip({...trip,[e.target.name]:e.target.value})} class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>---------Select Your Bus Type----------</option>
  <option value="A/c 2+1 Sleeper">A/c 2+1 Sleeper</option>
  <option value="Non-A/c 2+1 Sleepe">Non-A/c 2+1 Sleeper</option>
  <option value="A/c Sleeper">A/c Sleeper</option>
   <option value="Non-A/c Sleepe">Non-A/c Sleeper</option>
</select>
  </div>
         
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<div>
  <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Travelling_Name</th>
      <th scope="col">Contact</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col"> Available_Seats</th>
      <th scope="col">Ticket_Price</th>
      <th scope="col">From_Date_Timings</th>
      <th scope="col">To_Date_Timings</th>
      <th scope="col">Bus_Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <th scope="col">{trip.Travelling_Name}</th>
      <th scope="col">{trip.Contact}</th>
      <th scope="col">{trip.From}</th>
      <th scope="col">{trip.To}</th>
      <th scope="col"> {trip.Available_Seats}</th>
      <th scope="col">{trip.Ticket_Price}</th>
      <th scope="col">{trip.From_Date_Timings}</th>
      <th scope="col">{trip.To_Date_Timings}</th>
      <th scope="col">{trip.Bus_Type}</th>
    </tr>
    
  </tbody>
</table>
</div>
    </div>
  )
}

export default Add_trips
