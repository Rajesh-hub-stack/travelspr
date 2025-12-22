import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Help = () => {

  const[Query,setquery]=useState({
    'Name':'',
    'Mobile':'',
    'Query':'',
  })
  const submitquery=(e)=>{
    e.preventDefault()
      console.log(Query)
      axios.post('https://travelagency-18630-default-rtdb.firebaseio.com/help.json',Query).then(r1=>{
        alert('Query Submitted')
      })
    
  }
  return (
    <div>
      <div className='row mt-5' >
      <div className='col-6'>
        <div className='row'>
          <div className='col-6'>

       
        <div class="card border-light mb-3" >
  <div class="card-header">Support Team</div>
  <div class="card-body">
    <h5 class="card-title">080 227548 548</h5>
  </div>
  </div>
   </div>
    <div className='col-6'>

       
        <div class="card border-light mb-3" >
  <div class="card-header">Customer Support</div>
  <div class="card-body">
    <h5 class="card-title">+91-8651778777</h5>

  </div>
  </div>
   
   </div>
   <div className='col-6'>

       
        <div class="card border-light mb-3" >
  <div class="card-header">Technical issue</div>
  <div class="card-body">
    <h5 class="card-title">Travelagency@gamil.com</h5>
 
  </div>
  </div>
   </div>
   <div className='col-6'>

       
        <div class="card border-light mb-3" >
  <div class="card-header">About</div>
  <div class="card-body">
    <h5 class="card-title"><a href="#">Know more about our tavels</a></h5>
  
  </div>
  </div>
  </div>
   </div>
      
    </div>
    <div className='col-6'>
<center><h2><b>Enquiry Form</b></h2></center>
        <form onSubmit={submitquery}>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text"  name='Name' onChange={(e)=>setquery({...Query,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile</label>
    <input type="tel" name='Mobile' onChange={(e)=>setquery({...Query,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Query</label>
    <textarea type="text" name='Mobile' onChange={(e)=>setquery({...Query,[e.target.name]:e.target.value})}name='Mobile' onChange={(e)=>setquery({...Query,[e.target.name]:e.target.value})}  class="form-control" id="exampleFormControlTextarea1" rows='3'/>
  </div>
   
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>
  )
}

export default Help
