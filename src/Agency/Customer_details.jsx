import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Customer_details = () => {
  let[C_details,setCustomer]=useState([])

   axios.get('https://travelagency-18630-default-rtdb.firebaseio.com/user.json').then(r1=>{
      //  console.log(r1.data)
      setCustomer(r1.data)
      }) 
      let All_customers=[] 
      // console.log(Object.keys(C_details))
      for(let x  of Object.keys(C_details)){
        All_customers.push({
     'Name':C_details[x].Name,
        'Email':  C_details[x].Email,
           'Mobile': C_details[x].Mobile,
           'Password':C_details[x].Password,
        })
       
      }
        
  return (
    <div className='container mt-5'>
      <center><u><b><h5>Customer  Details</h5></b></u></center>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      
       <th scope="col">User Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Password</th>
{/*       
    <th scope="col">Date|Time</th> */}
     
    </tr>
  </thead>
  <tbody>
    { All_customers.map((x,index)=> <tr>
      <th scope="row">{index+1}</th>
      
      <td>{x.Name}</td>
      <td>{x.Mobile}</td>
       <td>{x.Email}</td>
        <td>{x.Password}</td>      
       {/* <td>11/10/2005 9:30pm</td> */}
      
    </tr>)}
    
    
  </tbody>
</table>
    </div>
  )
}

export default Customer_details
